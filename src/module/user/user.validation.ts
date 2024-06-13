import { z } from 'zod';
import { User_Role, User_Status } from './user.const';

const UserSchemaValidation = z.object({
  body: z.object({
    name: z.string(),
    role: z.nativeEnum(User_Role).default(User_Role.Admin),
    email: z.string().email(),
    password: z.string().optional(),
    status: z.nativeEnum(User_Status).default(User_Status.Active),
  }),
});
const updateUserSchemaValidation = z.object({
  body: z.object({
    name: z.string().optional(),
    role: z.nativeEnum(User_Role).optional(),
    status: z.nativeEnum(User_Status).optional(),
  }),
});

export const UserValidation = {
  UserSchemaValidation,
  updateUserSchemaValidation,
};
