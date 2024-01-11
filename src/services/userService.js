const User = require('../models/User');

async function getUserProfile(userId) {
	try {
		const user = await User.findById(userId);
		return user;
	} catch (error) {
		console.error('Error getting user profile:', error);
		throw new Error('Internal Server Error');
	}
}

async function updateUserProfile(userId, { username }) {
	try {
		const updatedUser = await User.findByIdAndUpdate(userId, { username }, { new: true });
		return updatedUser;
	} catch (error) {
		console.error('Error updating user profile:', error);
		throw new Error('Internal Server Error');
	}
}

module.exports = {
	getUserProfile,
	updateUserProfile,
};
