import { NextFunction, Request, Response } from 'express';
import noteService from '../services/service';


class NoteController {
  // Create a note
  async createNote(req: Request, res: Response, next: NextFunction) {
    const body = req.body
    try {
      // check if note already existed 
      const results = await noteService.getAllNote()
      const existingNote = results.find(result => result.title === body.title);
      if (existingNote){
        res.status(400).json({
          success: false,
          message: 'Note already exist'
        });
      } else {
        const newNote = await noteService.addNote(body);
        res.status(201).json({
          success: true,
          message: 'Note created successfully',
          note: newNote
        });
      }
    } catch (error) {
      res.status(500).json({message: error});
    }
  }

  // Get all note
  async getAllNote(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await noteService.getAllNote();
      res.status(200).json({
        success: true,
        message: 'Notes fetched successfully',
        data: result
      });
    } catch (error) {
      res.status(500).json({message: error});
    }
  }

  // Get a single note
  async getNote(req: Request, res: Response, next: NextFunction) {
    const id = req.params.noteId;
    console.log(id);
    try {
      const result = await noteService.getNote(id);
      res.status(200).json({
        success: true,
        message: 'Note fetched successfully',
        note: result
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: `No note with id: ${id}`
      });
    }
  }

  // Get note by categoryId
  async getByCategory(req: Request, res:Response, next: NextFunction) {
    const id = req.params.categoryId;
    console.log(id);
    try {
      const result = await noteService.getNoteByCategoryId(id);
      res.status(200).json({
        success: true,
        message: 'Note fetched successfully',
        note: result
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: `Note with categoryID: ${id} not found`});
    }
  }

  // Update a note
  async updateNote(req: Request, res: Response, next: NextFunction) {
    const id = req.params.id;
    const details = req.body;
    console.log(id);
    console.log(details);
    try {
      const newNote = await noteService.updateNote(id, details)
      res.status(200).json({
        success: true,
        message: 'Note updated successfully',
        data: newNote
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: `Note with id: ${id} not found`
      });
    }
  } 

  // Delete a note
  async deleteNote(req: Request, res: Response, next: NextFunction) {
    const id = req.params.noteId;
    console.log(id);
    try {
      const note = await noteService.deleteNote(id);
      res.status(200).json({
        success: true,
        message: `Note with id: ${id} deleted successfully`,
        deletedNote: note
      })
    } catch (error) {
      res.status(400).json({
        success: false,
        message: `No note found with id: ${id}`
      })
    }
    
  }
}

const noteController = new NoteController()
export default noteController