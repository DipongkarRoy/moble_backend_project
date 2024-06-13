import config from '../../app/config';
import { User_Role } from '../user/user.const';
import { UserModel } from '../user/user.model';
import { TUser } from './../user/user.interface';
import { isPasswordMacthed } from './aut.utils';
import { TLoginUser } from './auth.interface';
import jwt from 'jsonwebtoken';

const register = async (payload: TUser) => {
  const user = await UserModel.find({ email: payload.email });
  if (user) {
    throw new Error('user is allready exits');
  }
  payload.role = User_Role.User;

  const newUser = await UserModel.create(payload);
  return newUser;
};

const login = async (payload: TLoginUser) => {
  const email = payload.email

  const user = await UserModel.findOne({ email}).select( '+password')

  if (!user) {
    throw new Error('user is not found');
  }
  if (user.status === 'Blocked') {
    throw new Error('user is allready block');
  }
  const passwordMacth = await isPasswordMacthed(
    payload.password,
    user.password,
  );
  if (!passwordMacth) {
    throw new Error('user password not mactched');
  }

  const jwtPayload = {
    email: user.email,
    role: user.role,
  };

  const accessToken = jwt.sign(
    { jwtPayload },
    config.jwt_acess_secret as string,
    {
      expiresIn: config.jwt_acess_expireIn,
    },
  );
  const refressToken = jwt.sign(
    { payload },
    config.jwt_refress_secret as string,
    { expiresIn: config.jwt_refress_ixpired_in },
  );

  return {
    accessToken,
    refressToken,
  };
};

export const authServices = {
  register,
  login,
};
