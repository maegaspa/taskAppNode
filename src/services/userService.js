const User = require('../models/User');
const fs = require('fs/promises');
const bcrypt = require('bcrypt');

async function getUserProfile(userId) {
	try {
		const user = await User.findById(userId);
		return user;
	} catch (error) {
		console.error('Error getting user profile:', error);
		throw new Error('Internal Server Error');
	}
}

async function updateUserProfile(userId, profilePicture) {
	try {
		const username = profilePicture.username;
		const password = profilePicture.password;
		const hashedPassword = await bcrypt.hash(password, 10);
		const updatedFields = { username, password: hashedPassword };
		if (profilePicture) {
			const filename = Date.now() + '-' + profilePicture.name;
			const imagePath = `uploads/${filename}`;
			await fs.writeFile(imagePath, profilePicture.buffer);

			updatedFields.profilePicturePath = profilePicture.path;
		}
		const updatedUser = await User.findByIdAndUpdate(userId, updatedFields, { new: true });
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
