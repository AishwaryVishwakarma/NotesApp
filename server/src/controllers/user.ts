import express from 'express';
import {userModel} from '../schema/userSchema';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import {isNull} from '../utils';
import {generateJWT} from '../middleware/userMiddleware';

dotenv.config();

const saltSize = process.env.SALT_SIZE as string;

export async function signup(
  req: express.Request,
  res: express.Response
): Promise<void> {
  const {name, email, password} = req.body;

  if (!name || !email || !password) {
    res.status(400).send({detail: 'Mandatory Field missing'});
    return;
  }

  const userExist = await userModel.findOne({email}).exec();

  if (!isNull(userExist)) {
    res.status(409).send({message: 'User Already Exists'}); // status code for conflict
    return;
  }

  try {
    const salt = await bcrypt.genSalt(parseInt(saltSize));
    const hashedPwd = await bcrypt.hash(password, salt);

    const newUser = new userModel({name, email, password: hashedPwd});

    await newUser.save();

    const jwtToken = generateJWT(newUser.id);

    res.status(201).send({
      message: 'Success',
      jwtToken,
    });
  } catch (err) {
    res.status(401).send({detail: err}); // error cases to be discussed
  }
}
