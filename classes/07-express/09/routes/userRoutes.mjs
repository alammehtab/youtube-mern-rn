import express from 'express';
import { getUsers, getUserById, updateUser, deleteUser } from '../controllers/userController.mjs';
import { protect } from '../middleware/authMiddleware.mjs';

const router = express.Router();

// Protected route to get all users (JWT required)
router.get('/', protect, getUsers);

// GET user by ID
router.get('/:id', protect, getUserById);

// UPDATE user by ID
router.put('/:id', protect, updateUser);

// DELETE user by ID
router.delete('/:id', protect, deleteUser);

export default router;
