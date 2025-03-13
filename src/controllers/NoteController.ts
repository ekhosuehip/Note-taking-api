import { NextFunction, Request, Response } from 'express';
import {Note} from '../models/Note';
import {noteSchema} from '../middleware/Joi'

const createNote = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    try {
        // Validating request
        const { error, value } = noteSchema.create.validate(req.body, { abortEarly: false }); // Extract from body
        
        if (error) {
            return res.status(400).json({ error: error.details });
        }

        const { title, content, category } = req.body;

        // Create and save note
        const note = new Note({
            title,
            content,
            category
        });

        const savedNote = await note.save();
        return res.status(201).json({ note: savedNote });

    } catch (error) {
        return res.status(500).json({ error: error });
    }
};


const readNote = (req: Request, res: Response, next: NextFunction): Promise<any>  => {
    const noteId = req.params.noteId;

    return Note.findById(noteId)
        .then((note) => (note ? res.status(200).json({ note }) : res.status(404).json({ message: 'not found' })))
        .catch((error) => res.status(500).json({ error }));
};

const readAll = (req: Request, res: Response, next: NextFunction): Promise<any>  => {
    return Note.find()
        .then((note) => res.status(200).json({ note }))
        .catch((error) => res.status(500).json({ error }));
};


const deleteNote = (req: Request, res: Response, next: NextFunction): Promise<any> => {
    const noteId = req.params.noteId;

    return Note.findByIdAndDelete(noteId)
        .then((note) => (note ? res.status(200).json({ note, message: 'Deleted' }) : res.status(404).json({ message: 'not found' })))
        .catch((error) => res.status(500).json({ error }));
};

export default { createNote, readNote, readAll, deleteNote };