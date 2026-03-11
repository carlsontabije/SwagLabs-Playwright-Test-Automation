import dotenv from 'dotenv';
dotenv.config();

export const ENV = {
  BASE_URL: process.env.BASE_URL,
  PASSWORD:
    process.env.SAUCE_PASSWORD ??
    (() => {
      throw new Error('Missing Config: SAUCE_PASSWORD is not defined in .env');
    })
};
