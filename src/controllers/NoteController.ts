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
        const newNote = await noteService.addNote(body)
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










// const createNote = async (req: Request, res: Response, next: NextFunction) => {
//     try {
//         const { title, content, category } = req.body;

//         // Create and save note
//         const note = new Note({
//             title,
//             content,
//             category
//         });

//         const savedNote = await note.save();
//         res.status(201).json({ note: savedNote });

//     } catch (error) {
//        res.status(500).json({ error: error });
//     }
// };


// const readNote = async (req: Request, res: Response, next: NextFunction)  => {
//     const noteId = req.params.noteId;
    
//     try {
//         const note = await Note.findById(noteId);

//         // Check if note is found
//         if (!note) {
//             res.status(404).json({ message: `Note with ID ${noteId} not found` });
//         }

//         res.status(200).json({ note });

//     } catch (error) {
//         res.status(500).json({ error: error || 'Internal Server Error' });
//     }
// };


// const readAll = async (req: Request, res: Response, next: NextFunction)  => {
//     try {
//       const notes = await Note.find(); // Fetch all notes
//       if (notes.length > 0) { 
//         res.status(200).json({ notes });
//       } else {
//         res.status(404).json({ message: 'No notes found' });
//       }
//     } catch (error) {
//       res.status(500).json({ error: error || 'Internal Server Error' });
//     }
//   };

//   const getByCategory = async (req: Request, res: Response, next: NextFunction) => {
//     const categoryId = req.params.categoryId;

//     try {
//         const notes = await Note.find({ 'category._id': categoryId });

//         // Check if notes are found
//         if (notes.length === 0) {
//             res.status(404).json({ message: `No notes found for category ID ${categoryId}` });
//         }

//         res.status(200).json({ notes });

//     } catch (error) {
//         res.status(500).json({ error: error || 'Internal Server Error' });
//     }
// };

// const updateNote = async (req: Request, res: Response, next: NextFunction) => {
//     const searchId = req.params.id;
//     const { title, content, category } = req.body;

//     try{
//         const note = await Note.findByIdAndUpdate(searchId, 
//             { title, content, category }, 
//             { new: true, runValidators: true });
//         if (!note) {
//             res.status(404).json({ message: `No notes found with id ${searchId}` });
//         }
//         res.status(201).json({"Note updated": note });
//     }catch(err){
//         res.status(500).json({ error: err || 'Internal Server Error' });
//     }
// }



// const deleteNote = async (req: Request, res: Response, next: NextFunction) => {
//     const noteId = req.params.noteId;
  
//     try {
//       const note = await Note.findByIdAndDelete(noteId);
  
//       // Check if the note exists, then send appropriate response
//       if (note) {
//         res.status(200).json({ note, message: 'Deleted' });
//       } 
//       res.status(404).json({ message: 'Note not found' });
    
//     } catch (error) {
//       res.status(500).json({ Error: error || 'Internal Server Error' });
//     }
//   };

// export default { createNote, readNote, readAll, getByCategory, updateNote, deleteNote };