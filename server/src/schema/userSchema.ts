import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
   email:{
        type: String,
        required: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Email is invalid']
    },
    password:{
        type: String,
        required: true
    },
    account_created_on:{
        type: Date,
        required: true,
        default: Date.now
    },
    last_log_in: {
        type: Date,
        required: false
    },
})

const userModel = mongoose.model('users', userSchema)
export {userModel}