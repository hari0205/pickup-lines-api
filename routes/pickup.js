const express = require('express');
const router = express.Router();
const Quote = require('../models/pickupQuotes');

// Get all lines
router.get('/v1/lines', async (req, res) => {
    
	const quotes = await Quote.find();

	res.json(quotes);
});


// Get random line
router.get('/v1/random', async (req, res) => {
	const count = await Quote.countDocuments();
	const random = Math.floor(Math.random() * count);
	const quote = await Quote.findOne().skip(random);
    
	res.json(quote);
});


module.exports = router;