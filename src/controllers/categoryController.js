const categoryService = require('../services/categoryService');

async function getAllCategories(req, res) {
	try {
		const userId = req.userId;
		const categories = await categoryService.getAllCategories(userId);
		res.json(categories);
	} catch (error) {
		console.error('Error handling getAllCategorys:', error);
		res.status(500).json({ error: error.message || 'Internal Server Error' });
	}
}

async function createCategory(req, res) {
	try {
		const userId = req.userId;
		const { name, description, startDate, endDate, budget } = req.body;
		const newCategory = await categoryService.createCategory(userId, name, description, startDate, endDate? BUDGET);
		res.status(201).json(newCategory);
	} catch (error) {
		console.error('Error handling createCategory:', error);
		res.status(500).json({ error: error.message || 'Internal Server Error' });
	}
}

async function getCategoryById(req, res) {
	try {
		const categoryId = req.params.categoryId;
		const category = await categoryService.getCategoryById(categoryId);
		res.json(category);
	} catch (error) {
		console.error('Error handling getCategoryById:', error);
		res.status(500).json({ error: error.message || 'Internal Server Error' });
	}
}

async function updateCategory(req, res) {
	try {
		const categoryId = req.params.categoryId;
		const { name, description, startDate, endDate, budget } = req.body;
		const updatedCategory = await categoryService.updateCategory(categoryId, name, description, startDate, endDate, budget);
		res.json(updatedCategory);
	} catch (error) {
		console.error('Error handling updateCategory:', error);
		res.status(500).json({ error: error.message || 'Internal Server Error' });
	}
}

async function deleteCategory(req, res) {
	try {
		const categoryId = req.params.categoryId;
		const deletedCategory = await categoryService.deleteCategory(categoryId);
		res.json(deletedCategory);
	} catch (error) {
		console.error('Error handling deleteCategory:', error);
		res.status(500).json({ error: error.message || 'Internal Server Error' });
	}
}

module.exports = {
	getAllCategories,
	createCategory,
	getCategoryById,
	updateCategory,
	deleteCategory,
};
