const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');
const upload = require('../config/multerConfig');


router.use(authMiddleware);
router.get('/profile', userController.getUserProfile);
router.post('/profile', upload.single('profilePicture'), async (req, res) => {
	try {
		const profilePicture = req.body;

		console.log("HEY ICI CA GALEREdans userRoutes: 156666.")
		console.log(profilePicture);

		const userId = req.userId;

		const savedProfilePicture = await userController.updateUserProfile(userId, profilePicture);
		console.log(savedProfilePicture);

		res.status(200).json({ message: 'Profile picture and user saved successfully'});
	} catch (error) {
		console.error('Error saving profile picture / user:', error);
		res.status(500).json({ error: 'Failed to save profile picture and/or user' });
	}
});
module.exports = router;
