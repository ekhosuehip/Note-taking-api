import mongoose, { Schema, Document } from "mongoose";

// Define TypeScript interface for a note
export interface INote extends Document {
    title: string;
    content: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface INoteModel extends INote, Document {}

const NoteSchema: Schema = new Schema(
    {
        title: { type: String, required: true },
        content: { type: String, required: true }
    },
    {
        versionKey: false, timestamps: true
    }
);

export default mongoose.model<INoteModel>('Note', NoteSchema);
