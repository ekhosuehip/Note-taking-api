import express from 'express';
// import controller from "../controllers/NoteController";
import{validateNote} from '../middleware/Joi';
import {noteSchema} from '../schema/joiSchema'
import noteController from '../controllers/NoteController';

const router = express.Router();


router.get('/', noteController.getAllNote);
router.get('/:noteId', noteController.getNote);
router.get('/categories/:categoryId', noteController.getByCategory);
router.post('/',validateNote(noteSchema.note), noteController.createNote);
router.put('/:id',validateNote(noteSchema.note), noteController.updateNote);
router.delete('/:noteId', noteController.deleteNote);

export default router
