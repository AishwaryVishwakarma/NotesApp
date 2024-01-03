import express from 'express';
import {login, signup} from '../controllers/user';
import {authenticateJWT} from '../middleware/userMiddleware';

const router = express.Router();

router.post('/signup', signup);

router.post('/login', authenticateJWT, login);

export default router;
