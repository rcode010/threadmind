import { config } from 'dotenv'

config({path: ".env"})

export const {DATABASE_URL,PORT}= process.env;

