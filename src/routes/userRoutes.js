const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');
const upload = require('../config/multerConfig');


router.use(authMiddleware);
router.get('/profile', userController.getUserProfile);
router.put('/profile', userController.updateUserProfile);
router.post('/upload-profile-picture', upload.single('profilePicture'), async (req, res) => {
	try {
		const profilePicture = req.file;

		const savedProfilePicture = await userController.saveProfilePicture(profilePicture);

		res.status(200).json({ message: 'Profile picture saved successfully' });
	} catch (error) {
		console.error('Error saving profile picture:', error);
		res.status(500).json({ error: 'Failed to save profile picture' });
	}
});
module.exports = router;
