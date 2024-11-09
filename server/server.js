const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config(); 

// Initialize Express app
const app = express();

// Middleware



app.use(cors());
app.use(express.json());

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


app.get("/", (req, res) => {
	return res.json({ 
		success:true,
		message:'Your server is up and running....'
	}); 
});


// MongoDB connection
mongoose.connect(process.env.MONGODB_URL, {
  family:4
}).then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log('MongoDB connection error:', err));



// Mongoose schema
const applicationschema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    statement: String,
});

const Applicant = mongoose.model('Applicant', applicationschema);



app.post('/submit-application', async (req, res) => {
  try {
    const { name, email, phone, statement } = req.body;

    // Basic validation: check if all fields are provided
    if (!name || !email || !phone || !statement) {
      return res.status(400).json({ message: 'All fields are required.' });
    }

    // Create a new application document
    const newApplication = new Applicant({
      name,
      email,
      phone,
      statement,
    });

    // Save the application to MongoDB
    await newApplication.save();

    // Send response with the saved data
    res.status(200).json({
      message: 'Application received successfully',
      data: newApplication,
    });

    console.log('New application object:', newApplication);


  } catch (error) {
    console.error('Error submitting application:', error);
    res.status(500).json({ message: 'Error submitting application', error });
  }
});


// Route to fetch all applications (Admin Panel)
app.get('/admin/submissions', async (req, res) => {
  try {
    const applications = await Applicant.find(); // Get all submissions from MongoDB
    res.status(200).json(applications); // Send the applications data as JSON
  } catch (error) {
    console.error('Error fetching applications:', error);
    res.status(500).json({ message: 'Error fetching applications', error });
  }
});


// Route to delete a submission (Admin Panel)
app.delete('/admin/submissions/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Applicant.findByIdAndDelete(id); // Find and delete the application by ID
    if (!result) {
      return res.status(404).json({ message: 'Application not found' });
    }
    res.status(200).json({ message: 'Application deleted successfully' });
  } catch (error) {
    console.error('Error deleting application:', error);
    res.status(500).json({ message: 'Error deleting application', error });
  }
});


