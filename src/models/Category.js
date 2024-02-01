const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: false,
	},
	startDate: {
		type: Date,
		default: Date.now,
	},
	endDate: {
		type: Date,
	},
	createdAt: {
		type: Date,
		default:Date.now,
	},
	budget: {
		type     : Number,
		validate : {
			validator : Number.isInteger(),
			message   : '{VALUE} is not an integer value'
		}
	},
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	}
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
