// backend/src/config/db.ts
import mongoose from 'mongoose';

const connectDB = async () => {
  if (!process.env.MONGO_URI) {
    throw new Error('MONGO_URI is not defined in environment variables');
  }
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      // Options are from mongoose v6+, many options deprecated
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw error;
  }
};

export default connectDB;
