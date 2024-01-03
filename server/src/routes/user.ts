import express from 'express';
import {getUser, login, signup} from '../controllers/user';
import {authenticateJWT} from '../middleware/userMiddleware';

const router = express.Router();

router.post('/signup', signup);

router.post('/login', login);

router.get('/user', authenticateJWT, getUser);

export default router;
