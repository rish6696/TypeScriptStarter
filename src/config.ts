import dotenv from 'dotenv'
dotenv.config();


type EnvVariables = String | undefined


export const dbUrl : EnvVariables =process.env.DB_URL;
export const env   : EnvVariables=process.env.ENVIRONMENT




