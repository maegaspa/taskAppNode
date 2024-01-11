const Task = require('../models/Task');

async function getAllTasks() {
	try {
		const tasks = await Task.find();
		return tasks;
	} catch (error) {
		console.error('Error getting tasks:', error);
		throw new Error('Internal Server Error');
	}
}

async function createTask(title, description) {
	try {
		const newTask = new Task({ title, description });
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

async function updateTask(taskId, title, description) {
	try {
		const updatedTask = await Task.findByIdAndUpdate(
			taskId,
			{ title, description },
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
		const deletedTask = await Task.findByIdAndRemove(taskId);

		if (!deletedTask) {
			throw new Error('Task not found');
		}

		return { message: 'Task deleted successfully' };
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
};
