const multer = require('multer');

const multerConfig = {
	dest: 'uploads/',
	fileFilter: (req, file, cb) => {
		if (file.mimetype.startsWith('image/')) {
			cb(null, true);
		} else {
			cb(new Error('Only images are allowed'));
		}
	},
	limits: {
		fileSize: 1024 * 1024 * 10 // 10mo
	}
};

const upload = multer(multerConfig);

module.exports = upload;
