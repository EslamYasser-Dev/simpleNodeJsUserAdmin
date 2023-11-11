const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('./database');
const jwt = require('jsonwebtoken');
const userRoutes = require('./routes/userRoutes');
const errorMiddleware = require('./middleware/errorMiddleware');

const app = express();
const port = 6054;

app.use(bodyParser.json());

// Use user routes
app.use('/user', userRoutes);

// Error handling middleware
app.use(errorMiddleware);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
