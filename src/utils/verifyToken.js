const jwt = require('jsonwebtoken');
const jwtSecret = process.env.JWT_SECRET;

const verifyToken = (req, res, next) => {
  // Check if the 'Authorization' header is present
  const accessToken = req && req.headers && req.headers.authorization;

  if (!accessToken) {
    return res.status(401).json({ error: 'Unauthorized - Missing Access Token in Authorization Header' });
  }

  try {
    // Verify and decode the access token
    const decoded = jwt.verify(accessToken, jwtSecret);

    // Attach decoded user information to the request for later use in controllers
    req.user = decoded;

    // Continue to the next middleware or route handler
    next();
  } catch (error) {
    // Handle invalid or expired token
    return res.status(401).json({ error: 'Unauthorized - Invalid or Expired Access Token' });
  }
};

module.exports = verifyToken;
