import express from 'express';
import { getProfile, signIn, signUp } from '../controllers/authController';
import { validateSignIn } from '../middleware/validator';
import { authentication } from '../middleware/verifyHeader';

const router = express.Router();

router.post('/signup', signUp);
router.post('/signin', validateSignIn(), signIn);

router.use(authentication);
router.get('/me', getProfile);

export default router;
