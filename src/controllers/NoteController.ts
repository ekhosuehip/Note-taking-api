import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import Note from '../models/Note';

const createNote = (req: Request, res: Response, next: NextFunction): Promise<any>  => {
    const title = req.body.title;
    const content = req.body.content

    const note = new Note({
        _id: new mongoose.Types.ObjectId(),
        title,
        content
    });

    return note
        .save()
        .then((note) => res.status(201).json({ note }))
        .catch((error) => res.status(500).json({ error }));
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
        .then((note) => (note ? res.status(201).json({ note, message: 'Deleted' }) : res.status(404).json({ message: 'not found' })))
        .catch((error) => res.status(500).json({ error }));
};

export default { createNote, readNote, readAll, deleteNote };