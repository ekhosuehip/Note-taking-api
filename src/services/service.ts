import {INote, Note} from '../models/Note';

class NoteService {
    // Add a note
    async addNote(data: INote): Promise<INote> {
        return await Note.create(data);
    }

    // Update a note
    async updateNote(id: string, data: INote): Promise<INote | null> {
        return await Note.findByIdAndUpdate(id, data, {new: true});
    }

    // Get a single note
    async getNote(id: string): Promise<INote | null> {
        return await Note.findById(id);
    }

    // Get all note
    async getAllNote(): Promise<INote[]>{
        return await Note.find();
    }

    // Get by category
    async getNoteByCategoryId(id: string): Promise<INote[] | null> {
        return await Note.find({ 'category._id': id });
    }

    // Delete note
    async deleteNote(id: string): Promise<INote | null> {
        return await Note.findByIdAndDelete(id)
    }
}

const noteService = new NoteService()
export default  noteService