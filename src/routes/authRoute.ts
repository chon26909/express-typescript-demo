import express from 'express';
import { getProfile, signIn, signUp } from '../controllers/authController';
import { authentication } from '../middleware/verifyHeader';

const router = express.Router();

router.post('/signup', signUp);
router.post('/signin', signIn);

router.use(authentication);
router.get('/me', getProfile);

export default router;
