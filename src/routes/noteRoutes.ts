import express from 'express';
import controller from "../controllers/NoteController";

const router = express.Router();


router.get('/', controller.readAll);
router.get('/:noteId', controller.readNote);
router.post('/', controller.createNote);
router.delete('/:noteId', controller.deleteNote);

export default router
