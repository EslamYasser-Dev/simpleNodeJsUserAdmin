// errorMiddleware.js
const errorMiddleware = (err, req, res, next) => {
  console.error('Error:', err);

  // Customize the response based on the error
  res.status(500).json({ error: 'Internal Server Error' });
};

module.exports = errorMiddleware;
