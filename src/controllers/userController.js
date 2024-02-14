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

async function updateUserProfile(userId, profilePicture) {
	try {
		const updatedUser = await userService.updateUserProfile(userId, profilePicture );
		return(updatedUser);
	} catch (error) {
		console.error('Error handling updateUserProfile:', error);
		res.status(500).json({ error: error.message || 'Internal Server Error' });
	}
}


module.exports = {
	getUserProfile,
	updateUserProfile,
};
