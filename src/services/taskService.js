const Task = require('../models/Task');

async function getTasksByCategory(userId, categoryId) {
	try {
		const tasks = await Task.find({user: userId, category: categoryId });
		return tasks;
	} catch (error) {
		console.error('Error getting tasks by category:', error);
		throw new Error('Internal Server Error');
	}
}

async function getAllTasks(userId) {
	try {
		const tasks = await Task.find({ user: userId });
		return tasks;
	} catch (error) {
		console.error('Error getting all tasks:', error);
		throw new Error('Internal Server Error');
	}
}

async function createTask(userId, title, description, categoryId = undefined, isFavorite = false, dueDate = null) {
	try {
		const newTask = new Task({ user: userId, title, description, category: categoryId, isFavorite, dueDate });
		await newTask.save();
		return newTask;
	} catch (error) {
		console.error('Error creating task:', error);
		throw new Error('Internal Server Error');
	}
}

async function getTaskById(taskId) {
	try {
		const task = await Task.findById(taskId);

		if (!task) {
			throw new Error('Task not found');
		}

		return task;
	} catch (error) {
		console.error('Error getting task by ID:', error);
		throw new Error('Internal Server Error');
	}
}

async function updateTask(taskId, title, description, categoryId = undefined, isFavorite = false, dueDate = null,) {
	try {
		const updatedTask = await Task.findByIdAndUpdate(
			taskId,
			{ title, description, category: categoryId, isFavorite, dueDate },
			{ new: true }
		);

		if (!updatedTask) {
			throw new Error('Task not found');
		}

		return updatedTask;
	} catch (error) {
		console.error('Error updating task:', error);
		throw new Error('Internal Server Error');
	}
}

async function deleteTask(taskId) {

	try {
		const deletedTask = await Task.findByIdAndDelete(taskId);

		if (!deletedTask) {
			throw new Error('Task not found');
		}

		return deletedTask;
	} catch (error) {
		console.error('Error deleting task:', error);
		throw new Error('Internal Server Error');
	}
}

module.exports = {
	getAllTasks,
	createTask,
	getTaskById,
	updateTask,
	deleteTask,
	getTasksByCategory,
};
