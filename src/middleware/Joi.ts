import { INote } from '../models/Note';
import { NextFunction, Request, Response } from 'express';
import Joi, { ObjectSchema } from 'joi';

// Custom middleware for validating request body
export function validateNote<T>(schema: ObjectSchema<T>) {
  return async (req: Request, res: Response, next: NextFunction):Promise<any> => {
    try {
      const { error, value } = schema.validate(req.body, { abortEarly: false });

      if (error) {
        return res.status(400).json({ error: error.details });
      }

      req.body = value;  // Attach the validated body to the request
      next();
    } catch (err) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  };
}

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