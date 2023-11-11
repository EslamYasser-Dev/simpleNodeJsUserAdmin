const jwt = require('jsonwebtoken');

const jwtSecret = 'your-secret-key';

const verifyToken = (accessToken) => {
  try {
    jwt.verify(accessToken, jwtSecret);
    return true;
  } catch (error) {
    return false;
  }
};

module.exports = verifyToken;
