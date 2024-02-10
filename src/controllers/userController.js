const userService = require('../services/userService');

async function getUserProfile(req, res) {
	try {
		const userId = req.userId;
		const user = await userService.getUserProfile(userId);
		res.json(user);
	} catch (error) {
		console.error('Error handling getUserProfile:', error);
		res.status(500).json({ error: error.message || 'Internal Server Error' });
	}
}

async function updateUserProfile(req, res) {
	try {
		const userId = req.userId;
		const { username, password, profilePicture } = req.body;
		const updatedUser = await userService.updateUserProfile(userId, { username, password, profilePicture });
		res.json(updatedUser);
	} catch (error) {
		console.error('Error handling updateUserProfile:', error);
		res.status(500).json({ error: error.message || 'Internal Server Error' });
	}
}

async function saveProfilePicture(profilePicture) {
	try {
		const savedProfilePicture = await userService.saveProfilePicture(profilePicture);
		return savedProfilePicture;
	} catch (error) {
		console.error('Error handling saveProfilePicture:', error);
		throw new Error(error.message || 'Internal Server Error');
	}
}


module.exports = {
	getUserProfile,
	updateUserProfile,
	saveProfilePicture,
};
