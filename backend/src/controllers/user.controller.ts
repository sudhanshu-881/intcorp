// backend/src/controllers/user.controller.ts
import { Request, Response } from 'express';
import User from '../models/user.model';
import bcrypt from 'bcryptjs';
import { AuthRequest } from '../middleware/auth.middleware';

export const getUsers = async (req: Request, res: Response) => {
  const users = await User.find().select('-password').sort({ createdAt: -1 });
  res.json(users);
};

export const getUserById = async (req: Request, res: Response) => {
  const user = await User.findById(req.params.id).select('-password');
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  res.json(user);
};

export const updateUser = async (req: AuthRequest, res: Response) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  // Only allow user himself or admin to update
  if (req.user?.id !== user._id.toString() && !req.user?.isAdmin) {
    return res.status(403).json({ message: 'Not authorized to update this user' });
  }

  const { name, email, password, isAdmin } = req.body;

  if (name) user.name = name;
  if (email) user.email = email;
  if (typeof isAdmin === 'boolean' && req.user?.isAdmin) user.isAdmin = isAdmin;

  if (password) {
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);
  }

  await user.save();

  res.json({
    id: user._id,
    name: user.name,
    email: user.email,
    isAdmin: user.isAdmin,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt,
  });
};

export const deleteUser = async (req: AuthRequest, res: Response) => {
  const user = await User.findById(req.params.id);
  if (!user) return res.status(404).json({ message: 'User not found' });

  // Only allow user himself or admin to delete
  if (req.user?.id !== user._id.toString() && !req.user?.isAdmin) {
    return res.status(403).json({ message: 'Not authorized to delete this user' });
  }

  await user.deleteOne();

  res.json({ message: 'User removed' });
};
