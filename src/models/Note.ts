import mongoose, { Schema, Document } from "mongoose";

// Define TypeScript interface for a category
export interface ICategory {
    name: string;
    description: string;
}

// Define TypeScript interface for a note
export interface INote extends Document {
    title: string;
    content: string;
    category: ICategory; // Associating category with a note
    createdAt: Date;
    updatedAt: Date;
}

// Define Note Model
export interface INoteModel extends INote, Document {}

// Define Category Schema
const CategorySchema: Schema = new Schema(
    {
        name: { type: String, required: true },
        description: { type: String, required: true }
    },
    { versionKey: false }
);

// Define Note Schema
const NoteSchema: Schema = new Schema(
    {
        title: { type: String, required: true },
        content: { type: String, required: true },
        category: { type: CategorySchema, required: true } // Embedding category
    },
    {
        versionKey: false,
        timestamps: true
    }
);

// Export Mongoose models
export const Note = mongoose.model<INoteModel>("Note", NoteSchema);
export const Category = mongoose.model<ICategory>("Category", CategorySchema);
