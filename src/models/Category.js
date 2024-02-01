const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
	type: {
		type: String,
		enum: {
			values: ['Project', 'Vacation', 'Shopping'],
			message: '{VALUE} is not a valid type of category.'
		},
		required: true
	},
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
	budget: {
		type     : Number,
	},
	createdAt: {
		type: Date,
		default:Date.now,
	},
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	}
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
