const jwt = require('jsonwebtoken');
require('dotenv').config();

function createToken(userId, username) {
	const payload = {
		userId: userId,
		username: username
	};

	const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
	return token;
}

module.exports = { createToken };
