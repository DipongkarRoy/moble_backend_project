import express from 'express';
import { UserController } from './user.controller';
import validateRequst from '../../app/utils/validateRequst';
import { UserValidation } from './user.validation';

const router = express.Router();

router.post(
  '/create-admin',
  validateRequst(UserValidation.UserSchemaValidation),
  UserController.createAdmin,
);
router.put(
  '/:userId',
  validateRequst(UserValidation.updateUserSchemaValidation),
  UserController.updateUser,
);

export const userRouter = router;
