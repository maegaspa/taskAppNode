const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
	profilePicturePath: {
		type: String,
		required : false,
		default: "",
	}
});

const User = mongoose.model('User', userSchema);

module.exports = User;
