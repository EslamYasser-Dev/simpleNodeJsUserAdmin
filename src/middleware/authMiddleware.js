const express = require('express');
const verifyToken = require('../utils/verifyToken');

const authMiddleware = (req, res, next) => {
  const accessToken = req.query.accessToken || '';

  if (!verifyToken(req, accessToken)) {
    res.status(401).json({ error: 'Unauthorized' });
  } else {
    next();
  }
};


module.exports = authMiddleware;
