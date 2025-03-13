import express from 'express';
import controller from "../controllers/NoteController";
import{validateNote, noteSchema} from '../middleware/Joi'

const router = express.Router();


router.get('/', controller.readAll);
router.get('/:noteId', controller.readNote);
router.post('/',validateNote(noteSchema.create), controller.createNote);
router.delete('/:noteId', controller.deleteNote);

export default router
