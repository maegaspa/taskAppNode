const mongoose = require('mongoose');
require('dotenv').config();

const connect = async () => {
	try {
		await mongoose.connect(process.env.DB_CONNECTION_STRING, {});
		console.log('Connected to the database');
	} catch (error) {
		console.error('Error connecting to the database:', error.message);
		process.exit(1); // Exit the process if unable to connect
	}
};

module.exports = { connect };
