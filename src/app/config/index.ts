/* eslint-disable no-undef */
import dotenv from 'dotenv';

import path from 'path';

// eslint-disable-next-line no-undef
dotenv.config({ path: path.join(process.cwd(), '.env') });

export default {
  port: process.env.PORT,
  movie_db: process.env.DB_URL,
};
