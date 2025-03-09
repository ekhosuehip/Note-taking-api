import mongoose, { Schema, Document } from "mongoose";

// Define TypeScript interface for a note
export interface INote extends Document {
  title: string;
  content: string;
}

export interface INoteModel extends INote, Document {}

const NoteSchema: Schema = new Schema(
    {
        title: { type: String, required: true },
        content: { type: String, required: true }
    },
    {
        versionKey: false
    }
);

export default mongoose.model<INoteModel>('Note', NoteSchema);
