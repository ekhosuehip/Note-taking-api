import { NextFunction, Request, Response } from 'express';
import {Note} from '../models/Note';

const createNote = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    try {
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


const readNote = async (req: Request, res: Response, next: NextFunction): Promise<any>  => {
    const noteId = req.params.noteId;
    
    try {
        const note = await Note.findById(noteId);

        // Check if note is found
        if (!note) {
            return res.status(404).json({ message: `Note with ID ${noteId} not found` });
        }

        return res.status(200).json({ note });

    } catch (error) {
        return res.status(500).json({ error: error || 'Internal Server Error' });
    }
};


const readAll = async (req: Request, res: Response, next: NextFunction): Promise<any>  => {
    try {
      const notes = await Note.find(); // Fetch all notes
      if (notes.length > 0) { 
        return res.status(200).json({ notes });
      } else {
        return res.status(404).json({ message: 'No notes found' });
      }
    } catch (error) {
      return res.status(500).json({ error: error || 'Internal Server Error' });
    }
  };

  const getByCategory = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    const categoryId = req.params.categoryId;

    try {
        const notes = await Note.find({ 'category._id': categoryId });

        // Check if notes are found
        if (notes.length === 0) {
            return res.status(404).json({ message: `No notes found for category ID ${categoryId}` });
        }

        return res.status(200).json({ notes });

    } catch (error) {
        return res.status(500).json({ error: error || 'Internal Server Error' });
    }
};

const updateNote = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    const searchId = req.params.id
    console.log(searchId)
    const { title, content, category } = req.body;

    try{
        const note = await Note.findByIdAndUpdate(searchId, 
            { title, content, category }, 
            { new: true, runValidators: true });
        if (!note) {
            return res.status(404).json({ message: `No notes found with id ${searchId}` });
        }
        return res.status(201).json({"Note updated": note });
    }catch(err){
        return res.status(500).json({ error: err || 'Internal Server Error' });
    }
}



const deleteNote = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    const noteId = req.params.noteId;
  
    try {
      const note = await Note.findByIdAndDelete(noteId);
  
      // Check if the note exists, then return appropriate response
      if (note) {
        return res.status(200).json({ note, message: 'Deleted' });
      } else {
        return res.status(404).json({ message: 'Note not found' });
      }
    } catch (error) {
      return res.status(500).json({ Error: error || 'Internal Server Error' });
    }
  };

export default { createNote, readNote, readAll, getByCategory, updateNote, deleteNote };