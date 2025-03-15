import Joi from 'joi';
import { INote } from '../models/Note';

export const noteSchema = {
    note: Joi.object<INote>({
        title: Joi.string().min(1).required(),
        content: Joi.string().min(5).required(),
        category: Joi.object({
            name: Joi.string().min(1).required(),
            description: Joi.string().min(1).optional()
        }).required()
    })
};