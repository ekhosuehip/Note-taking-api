import Joi from 'joi';
import { INote } from '../models/Note';

export const noteSchema = {
    create: Joi.object<INote>({
        title: Joi.string().required(),
        content: Joi.string().required(),
        category: Joi.object({
            name: Joi.string().required(),
            description: Joi.string().allow("").optional()
        }).required()
    }),
};