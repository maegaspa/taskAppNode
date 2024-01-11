const bcrypt = require('bcrypt');
const jwt = require('../config/jwt');
const User = require('../models/User');

async function registerUser(username, password) {
	const existingUser = await User.findOne({ username });
	if (existingUser) {
		throw new Error('Username already exists');
	}

	const hashedPassword = await bcrypt.hash(password, 10);

	const newUser = new User({ username, password: hashedPassword });
	await newUser.save();

	const token = jwt.createToken(newUser._id);

	return token;
}

async function authenticateUser(username, password) {
	const user = await User.findOne({ username });
	if (!user || !(await bcrypt.compare(password, user.password))) {
		throw new Error('Invalid username or password');
	}

	const token = jwt.createToken(user._id);

	return token;
}

module.exports = { registerUser, authenticateUser };
