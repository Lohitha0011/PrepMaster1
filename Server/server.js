const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors'); // Import CORS
const dotenv = require('dotenv');
const bcrypt = require('bcrypt');
const User = require('./models/User');
const Stat = require('./models/Stat');
const Activity = require('./models/Activity');
const Achievement = require('./models/Achievement');

dotenv.config();
const app = express();

app.use(express.json()); // Parse JSON bodies
app.get('/', (req, res) => {
    res.send('Welcome to the API');
  });
  
// Configure CORS
const corsOptions = {
    origin: 'http://localhost:5173', // Replace with your frontend URL
};
app.use(cors(corsOptions)); // Apply CORS middleware

// MongoDB Connection
const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
    console.error("MONGO_URI is not defined in the environment variables.");
    process.exit(1); // Exit if MONGO_URI is not defined
}

mongoose.connect(MONGO_URI)
    .then(() => console.log("MongoDB connected successfully"))
    .catch((error) => console.error("Error connecting to MongoDB:", error));

// Routes
app.post('/api/signup', async (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        return res.status(400).json({ message: 'All fields are required' });
      }
    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Email is already registered' });
        }
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const user = new User({ name, email, password: hashedPassword });
        await user.save();

        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Other routes (stats, activity, achievements)
app.get('/api/dashboard/stats', async (req, res) => {
    try {
        const stats = await Stat.find();
        res.json(stats);
    } catch (error) {
        console.error('Error fetching stats:', error);
        res.status(500).json({ message: 'Error fetching stats' });
    }
});

app.get('/api/dashboard/activity', async (req, res) => {
    try {
        const activities = await Activity.find();
        res.json(activities);
    } catch (error) {
        console.error('Error fetching activities:', error);
        res.status(500).json({ message: 'Error fetching activities' });
    }
});

app.get('/api/dashboard/achievements', async (req, res) => {
    try {
        const achievements = await Achievement.find();
        res.json(achievements);
    } catch (error) {
        console.error('Error fetching achievements:', error);
        res.status(500).json({ message: 'Error fetching achievements' });
    }
});

// Start the Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
