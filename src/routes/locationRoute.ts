import express from 'express';
import { createLocation, getToilet, getToilets } from '../controllers/locationController';
import { authentication } from '../middleware/verifyHeader';

const router = express.Router();

// router.use(authentication);
router.get('/', getToilets);
router.get('/:id', getToilet);
router.post('/', createLocation);

export default router;
