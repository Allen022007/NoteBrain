import express from "express";
import cors from "cors"
import dotenv from "dotenv";
import path from "path";
import rateLimiter from "./middleware/rateLimiter.js"
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const  __dirname = path.resolve()


if(process.env.NODE_ENV !== "production") {
  app.use(cors({
  origin: "http://localhost:5173",
})
);
}


app.use(express.json()); // this middleware will paerse the json bodies
app.use(rateLimiter)

// app.use((req,res,next) => {
//  console.log(`req method is ${req.method} and req url is ${req.url}`);
//  next();
//  })

app.use("/api/notes", notesRoutes);

if(process.env.NODE_ENV === "production"){

  app.use(express.static(path.join(__dirname,"../frontend/dist")))

  app.get("*",(req,res) => {
    res.sendFile(path.join(__dirname,"../frontend/dist/index.html"))
  })

}

connectDB().then(() => {
    app.listen(5000, () => {
    console.log("Server is running on port :",PORT);
  }); 
});

