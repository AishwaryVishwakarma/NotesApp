import express from 'express';
import {User, userModel} from '../schema/userSchema';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import {isNull, isNullOrUndefined} from '../utils';
import {generateJWT} from '../middleware/userMiddleware';

dotenv.config();

const saltSize = process.env.SALT_SIZE as string;

// Signup function
export async function signup(
  req: express.Request,
  res: express.Response
): Promise<void> {
  const {name, email, password} = req.body ?? {};

  if (!name || !email || !password) {
    res.status(400).send({message: 'Mandatory Field missing'});
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

// Login function
export async function login(
  req: express.Request,
  res: express.Response
): Promise<void> {
  const {email, password} = req.body ?? {};

  if (!email || !password) {
    res.status(400).send({detail: 'Mandatory Field missing'});
    return;
  }

  const user = await userModel.findOne({email}).exec();

  if (!user || !(await bcrypt.compare(password, user.password))) {
    res.status(401).send({detail: 'Invalid Credentials'});
    return;
  }

  try {
    const jwtToken = generateJWT(user.id);

    user.last_log_in = Date();

    await user.save();

    res.status(200).send({
      message: 'success',
      id: user._id,
      email,
      jwtToken,
    });
  } catch (error) {
    res.status(401).send({detail: error});
  }
}

//
export async function getUser(
  req: express.Request,
  res: express.Response
): Promise<void> {
  const {user_id: userId} = req.body ?? {};

  if (isNullOrUndefined(userId)) {
    res.status(400).send({detail: 'User ID is missing'});
    return;
  }

  try {
    const user = await userModel.findById(userId).exec();

    if (isNull(user)) {
      res.status(404).send({detail: 'User not found'});
      return;
    }

    const {password, ...rest} = user as User;

    res.status(200).send({
      message: 'success',
      ...rest,
    });
  } catch (error) {
    res.status(401).send({detail: error});
  }
}
