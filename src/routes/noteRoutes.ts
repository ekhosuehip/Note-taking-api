import express from 'express';
import controller from "../controllers/NoteController";
import{validateNote, noteSchema} from '../middleware/Joi'

const router = express.Router();


router.get('/', controller.readAll);
router.get('/:noteId', controller.readNote);
router.get('/categories/:categoryId', controller.getByCategory);
router.post('/',validateNote(noteSchema.note), controller.createNote);
router.put('/:id',validateNote(noteSchema.note), controller.updateNote);
router.delete('/:noteId', controller.deleteNote);

export default router
