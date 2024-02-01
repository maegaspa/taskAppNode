const Category = require('../models/Category');

async function getAllCategories(userId) {
	try {
		const categories = await Category.find({ user: userId });
		return categories;
	} catch (error) {
		console.error('Error getting categorys:', error);
		throw new Error('Internal Server Error');
	}
}

async function createCategory(userId, name, description, startDate = false, endDate = null, budget = 0) {
	try {
		const newCategory = new Category({ user: userId, name, description, startDate, endDate, budget });
		await newCategory.save();
		return newCategory;
	} catch (error) {
		console.error('Error creating category:', error);
		throw new Error('Internal Server Error');
	}
}

async function getCategoryById(categoryId) {
	try {
		const category = await Category.findById(categoryId);

		if (!category) {
			throw new Error('Category not found');
		}

		return category;
	} catch (error) {
		console.error('Error getting category by ID:', error);
		throw new Error('Internal Server Error');
	}
}

async function updateCategory(categoryId, name, description, startDate = null, endDate = null, budget) {
	try {
		const updatedCategory = await Category.findByIdAndUpdate(
			categoryId,
			{ name, description, startDate, endDate, budget },
			{ new: true }
		);

		if (!updatedCategory) {
			throw new Error('Category not found');
		}

		return updatedCategory;
	} catch (error) {
		console.error('Error updating category:', error);
		throw new Error('Internal Server Error');
	}
}

async function deleteCategory(categoryId) {

	try {
		const deletedCategory = await Category.findByIdAndDelete(categoryId);

		if (!deletedCategory) {
			throw new Error('Category not found');
		}

		return deletedCategory;
	} catch (error) {
		console.error('Error deleting category:', error);
		throw new Error('Internal Server Error');
	}
}

module.exports = {
	getAllCategories,
	createCategory,
	getCategoryById,
	updateCategory,
	deleteCategory,
};
