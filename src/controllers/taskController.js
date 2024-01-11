const taskService = require('../services/taskService');

async function getAllTasks(req, res) {
	try {
		const tasks = await taskService.getAllTasks();
		res.json(tasks);
	} catch (error) {
		console.error('Error handling getAllTasks:', error);
		res.status(500).json({ error: error.message || 'Internal Server Error' });
	}
}

async function createTask(req, res) {
	try {
		const { title, description } = req.body;
		const newTask = await taskService.createTask(title, description);
		res.status(201).json(newTask);
	} catch (error) {
		console.error('Error handling createTask:', error);
		res.status(500).json({ error: error.message || 'Internal Server Error' });
	}
}

async function getTaskById(req, res) {
	try {
		const taskId = req.params.taskId;
		const task = await taskService.getTaskById(taskId);
		res.json(task);
	} catch (error) {
		console.error('Error handling getTaskById:', error);
		res.status(500).json({ error: error.message || 'Internal Server Error' });
	}
}

async function updateTask(req, res) {
	try {
		const taskId = req.params.taskId;
		const { title, description } = req.body;
		const updatedTask = await taskService.updateTask(taskId, title, description);
		res.json(updatedTask);
	} catch (error) {
		console.error('Error handling updateTask:', error);
		res.status(500).json({ error: error.message || 'Internal Server Error' });
	}
}

async function deleteTask(req, res) {
	try {
		const taskId = req.params.taskId;
		await taskService.deleteTask(taskId);
		res.json({ message: 'Task deleted successfully' });
	} catch (error) {
		console.error('Error handling deleteTask:', error);
		res.status(500).json({ error: error.message || 'Internal Server Error' });
	}
}

module.exports = {
	getAllTasks,
	createTask,
	getTaskById,
	updateTask,
	deleteTask,
};
