const mongoose = require('mongoose');

const QuoteSchema = new mongoose.Schema({
	line :String
});

module.exports = mongoose.model('Quote', QuoteSchema);