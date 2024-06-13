/* eslint-disable no-undef */
import dotenv from 'dotenv';

import path from 'path';

// eslint-disable-next-line no-undef
dotenv.config({ path: path.join(process.cwd(), '.env') });

export default {
  node_dev:process.env.NODE_DEV,
  port: process.env.PORT,
  movie_db: process.env.DB_URL,
  bcrypt_salt:process.env.BCRYPT_SALT_ROUNDS,
  jwt_acess_secret :process.env.JWT_ACCESS_SECRET,
  jwt_acess_expireIn :process.env.JWT_ACCESS_EXPIREIN,
  jwt_refress_secret:process.env.JWT_ACCESS_REFRESS,
  jwt_refress_ixpired_in: process.env.JWT_ACCESS_REFRESS_EXPIREIN

};
