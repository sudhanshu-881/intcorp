import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import authRoutes from './routes/auth.routes';
import userRoutes from './routes/user.routes';
import productRoutes from './routes/product.routes';

import { errorHandler } from './middleware/error.middleware';

// Load environment variables
dotenv.config();

const app = express();

// MongoDB connection
mongoose.connect(process.env.MONGO_URI!, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
} as mongoose.ConnectOptions)
  .then(() => console.log('✅ MongoDB connected'))
  .catch((err) => console.error('❌ MongoDB connection error:', err));

// CORS configuration
const allowedOrigins = [
  'http://localhost:5173', // Vite default
  'http://localhost:3000', // React default
  process.env.FRONTEND_URL, // Add your production frontend URL in .env as FRONTEND_URL=https://your-frontend.com
].filter(Boolean);

app.use(cors({
  origin: allowedOrigins,
  credentials: true, // Set to true if you need to send cookies or auth headers
}));

// Middleware
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);

// Error handling middleware (should be last)
app.use(errorHandler);

export default app;
