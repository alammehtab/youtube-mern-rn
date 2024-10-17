import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import userRoutes from './routes/userRoutes.mjs';
import * as dotenv from 'dotenv'

dotenv.config()

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB Atlas connection
mongoose.connect(process.env.MONGODB_ATLAS_URI).then(() => {
    console.log('Connected to MongoDB Atlas');
}).catch(err => {
    console.error('Error connecting to MongoDB:', err.message);
});

// Routes
app.use('/api', userRoutes);

app.listen(3000, () => {
    console.log('Server running on port 5000');
});
