const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');
const authMiddleware = require('../middlewares/authMiddleware');

router.use(authMiddleware);
router.get('/categories', categoryController.getAllCategories);
router.post('/categories', categoryController.createCategory);
router.get('/categories/:categoryId', categoryController.getCategoryById);
router.put('/categories/:categoryId', categoryController.updateCategory);
router.delete('/categories/:categoryId', categoryController.deleteCategory);

module.exports = router;
