const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');
const authMiddleware = require('../middlewares/authMiddleware');

router.use(authMiddleware);
router.get('/categoryies', categoryController.getAllCategories);
router.post('/categoryies', categoryController.createCategory);
router.get('/categoryies/:categoryId', categoryController.getCategoryById);
router.put('/categoryies/:categoryId', categoryController.updateCategory);
router.delete('/categories/:categoryId', categoryController.deleteCategory);

module.exports = router;
