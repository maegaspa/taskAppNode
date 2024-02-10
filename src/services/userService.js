const User = require('../models/User');
const fs = require('fs/promises');

async function getUserProfile(userId) {
	try {
		const user = await User.findById(userId);
		return user;
	} catch (error) {
		console.error('Error getting user profile:', error);
		throw new Error('Internal Server Error');
	}
}

async function updateUserProfile(userId, { username, password, profilePicture }) {
	try {
		const updatedFields = { username, password };
		console.error(updatedFields);
		if (profilePicture) {
			updatedFields.profilePicture = profilePicture;
		}
		const updatedUser = await User.findByIdAndUpdate(userId, updatedFields, { new: true });
		return updatedUser;
	} catch (error) {
		console.error('Error updating user profile:', error);
		throw new Error('Internal Server Error');
	}
}

async function saveProfilePicture(profilePicture) {
	try {
		const filename = Date.now() + '-' + profilePicture.originalname;
		const imagePath = `uploads/${filename}`;
		await fs.writeFile(imagePath, profilePicture.buffer);

		return imagePath;
	} catch (error) {
		console.error('Error saving profile picture:', error);
		throw new Error('Failed to save profile picture');
	}
}

module.exports = {
	getUserProfile,
	updateUserProfile,
	saveProfilePicture,
};
