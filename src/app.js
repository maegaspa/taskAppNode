const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dbConfig = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const taskRoutes = require('./routes/taskRoutes');
const userRoutes = require('./routes/userRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const authMiddleware = require('./middlewares/authMiddleware');
const errorMiddleware = require('./middlewares/errorMiddleware');
const validationMiddleware = require('./middlewares/validationMiddleware');


const app = express();

app.use(bodyParser.json());
app.use(cors());

dbConfig.connect();

app.use(authMiddleware);

app.use(validationMiddleware);
app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);
app.use('/api/users', userRoutes);
app.use('/api/categories', categoryRoutes);

app.use(errorMiddleware);

module.exports = app;
