import express from 'express';
import { getAllUsers, addUser, updateUser, deleteUser } from '../controllers/userController.mjs';

const router = express.Router();

router.get('/users', getAllUsers);
router.post('/users', addUser);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

export default router;
