// User Schema

import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Email is invalid',
    ],
  },
  password: {
    type: String,
    required: true,
  },
  account_created_on: {
    type: String,
    required: true,
    default: Date(),
  },
  last_log_in: {
    type: String,
    required: false,
  },
});

const userModel = mongoose.model('users', userSchema);

export {userModel};
