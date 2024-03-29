import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import express from 'express';

dotenv.config();

const privateKey = process.env.PRIVATE_KEY as string;

export function generateJWT(id: string) {
  return jwt.sign({id}, privateKey, {expiresIn: '30d'});
}

export function authenticateJWT(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
): void {
  const authHeader = req.headers?.authorization;

  if (authHeader) {
    const token = authHeader.split(' ')[1];

    jwt.verify(token, privateKey, (err) => {
      if (err) {
        return res.status(401).send({detail: err.message});
      }
      next();
    });
  } else {
    res.status(401).send({detail: 'Unauthorized access, please login again'});
  }
}
