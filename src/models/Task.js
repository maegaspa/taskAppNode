const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	isFavorite: {
		type: Boolean,
		default: false,
	},
	dueDate: {
		type: Date,
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	},
	category: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Category',
		required: false,
		default: undefined
	}
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
