import express from "express"
import { createNote, deleteNote, getAllNotes, getNote, updateNote} from "../controllers/notesControllers.js"

const router = express.Router()

// creating endpoints
// fetching all notes
router.get("/",getAllNotes);
// fetching a single note
router.get("/:id", getNote);
// creating a data
router.post("/",createNote);
// updating a data
router.put("/:id",updateNote);
// deletion of a data
router.delete("/:id",deleteNote);


export default router;
