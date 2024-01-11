const authService = require('../services/authService');

async function register(req, res) {
	try {
		const { username, password } = req.body;

		const token = await authService.registerUser(username, password);

		res.status(201).json({ message: 'User registered successfully', token });
	} catch (error) {
		console.error('Error registering user:', error);
		res.status(400).json({ error: error.message || 'Bad Request' });
	}
}

async function login(req, res) {
	try {
		const { username, password } = req.body;

		const token = await authService.authenticateUser(username, password);

		res.json({ token });
	} catch (error) {
		console.error('Error logging in:', error);
		res.status(401).json({ error: error.message || 'Unauthorized' });
	}
}

module.exports = { register, login };
