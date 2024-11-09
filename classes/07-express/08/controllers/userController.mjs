import { User } from "../models/User.mjs";

export const getUsers = async (req, res) => {
    try {
        const users = await User.find().select('-password');  // Exclude password from response
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch users' });
    }
};
