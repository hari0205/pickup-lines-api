// Importing the environment variables
require('dotenv').config(); 

// Configuring dependencies
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Create express app
const app = express();

// Connecting to database

mongoose.connect(process.env.mongo_uri, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
// Checking connection status
db.once('open', () => {
	console.log("Connected to MongoDB database...");
});




// Middleware
app.use(bodyParser.json());

// Routes
app.get('/', (req, res) => {
	res.send("Hello, World!");
});


const QuotesRoute = require('./routes/pickup');

app.use('/api/', QuotesRoute);

// Starting server
app.listen(process.env.PORT, console.log("Listening on port 3000"));