import Joi, { ObjectSchema } from 'joi';
import { NextFunction, Request, Response } from 'express';
import Note, { INote } from '../models/Note';
;

export const ValidateJoi = (schema: ObjectSchema) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            await schema.validateAsync(req.body);

            next();
        } catch (error) {
            console.log(error);

            return res.status(422).json({ error });
        }
    };
};

export const Schemas = {
    note: {
        create: Joi.object<INote>({
            title: Joi.string().required(),
            content: Joi.string().required()
        }),
        update: Joi.object<INote>({
            title: Joi.string().required(),
            content: Joi.string().required()
        })
    }
};