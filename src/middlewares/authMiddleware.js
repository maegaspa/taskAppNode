const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = (req, res, next) => {
	if ((req.url === '/api/auth/register' || req.url === '/api/auth/login')
		&& req.method === 'POST') {
		return next();
	}

	const token = req.header('Authorization');

	if (!token) {
		return res.status(401).json({ error: 'Unauthorized - No token provided' });
	}

	try {
		const decoded = jwt.verify(token, process.env.JWT_SECRET);
		req.userId = decoded.userId;
		next();
	} catch (error) {
		console.error('Error verifying JWT:', error);
		return res.status(401).json({ error: 'Unauthorized - Invalid token' });
	}
};
