import express from 'express';
import { getUsers } from '../controllers/userController.mjs';
import { protect } from '../middleware/authMiddleware.mjs';

const router = express.Router();

// Protected route to get all users (JWT required)
router.get('/', protect, getUsers);

export default router;
