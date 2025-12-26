const connectDB = require('./config/db'); // Connect db
const child_dataRoutes = require('./routes/child_dataRoutes'); // Connect child data route
const health_recordRoute = require('./routes/health_recordRoute'); // Connect health records route
const appointmentsRoutes = require('./routes/appointmentsRoutes'); // Connect appointments route

require('dotenv').config(); // Loads environment variables from .env

const express = require('express'); // Imports Express from dependencies(package.json)
const app = express(); // Creates Express app
const port = process.env.PORT || 5000; // Sets the port from .env

// Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// Database connection
connectDB()

// Home route
app.get('/', (req, res) => {
    res.send('Home Page')
})

// Middleware
app.use(express.json());

// Routes
app.use('/api/child_data', child_dataRoutes);
app.use('/api/health_record', health_recordRoute);
app.use('/api/appointments', appointmentsRoutes);