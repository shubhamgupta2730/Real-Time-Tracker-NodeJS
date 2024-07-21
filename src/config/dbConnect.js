import mongoose from 'mongoose';
import dotenv from 'dotenv';
import logger from '../logger.js';
dotenv.config();

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    logger.info('MongoDB Connected');
  } catch (err) {
    logger.error('Database connection failed:', err);
    process.exit(1);
  }
};

export default dbConnect;
