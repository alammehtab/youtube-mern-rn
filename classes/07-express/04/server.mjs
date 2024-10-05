import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

// Initialize Express
const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection string (replace <your_connection_string> with your own)
const mongoUri = 'mongodb://localhost:27017/user_management'; // or use your MongoDB Atlas URI

// Connect to MongoDB
mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Error connecting to MongoDB:', err.message);
});

// Define a User schema
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
});

// Create a User model
const User = mongoose.model('User', userSchema);

// Start the server
app.listen(3000, () => {
    console.log('Server running on port 3000');
});