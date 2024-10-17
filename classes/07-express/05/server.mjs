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
    email: {
        type: String,
        required: true
    }
});

// Create a User model
const User = mongoose.model('User', userSchema);

// Basic CRUD operations

// READ: Get all users
app.get('/api/users', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching users' });
    }
});

// CREATE: Add a new user
app.post('/api/users', async (req, res) => {
    try {
        const newUser = new User(req.body);
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ message: 'Error adding user' });
    }
});

// UPDATE: Update a user by id
app.put('/api/users/:id', async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedUser) return res.status(404).json({ message: 'User not found' });
        res.json(updatedUser);
    } catch (error) {
        res.status(500).json({ message: 'Error updating user' });
    }
});

// DELETE: Delete a user by id
app.delete('/api/users/:id', async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);

        if (!deletedUser) {
            // If no user was found with that ID
            return res.status(404).json({ message: 'User not found' });
        }

        // If the user was successfully deleted
        res.status(200).json({ message: 'User successfully deleted', user: deletedUser });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting user', error: error.message });
    }
});

// Start the server
app.listen(3000, () => {
    console.log('Server running on port 3000');
});