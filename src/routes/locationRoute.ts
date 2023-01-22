import express from 'express';
import { getAllLocation } from '../controllers/locationController';
import { authentication } from '../middleware/verifyHeader';

const router = express.Router();

router.use(authentication);
router.get('/', getAllLocation);

export default router;
