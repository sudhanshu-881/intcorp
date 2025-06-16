// backend/src/routes/user.routes.ts
import express from 'express';
import {
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
} from '../controllers/user.controller';
import { protect, adminOnly } from '../middleware/auth.middleware';

const router = express.Router();

router.get('/', protect, adminOnly, getUsers);
router.get('/:id', protect, getUserById);
router.put('/:id', protect, updateUser);
router.delete('/:id', protect, deleteUser);

export default router;
