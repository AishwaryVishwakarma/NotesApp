import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const privateKey = process.env.PRIVATE_KEY as string;

export function generateJWT(id: string) {
  return jwt.sign({id}, privateKey, {expiresIn: '30d'});
}
