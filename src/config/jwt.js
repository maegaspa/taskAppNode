const jwt = require('jsonwebtoken');
require('dotenv').config();

function createToken(userId) {
	const token = jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '1h' });
	return token;
}

module.exports = { createToken };
