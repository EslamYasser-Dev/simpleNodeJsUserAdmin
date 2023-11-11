const UserModel = require('../models/user');
const generateHash = require('../utils/generateHash');
const jwt = require('jsonwebtoken');

const jwtSecret = process.env.JWT_SECRET;

const createUser = async (req, res) => {
  try {
    const { firstName, lastName, email, marketingConsent } = req.body;

    const id = generateHash(email);

    const accessToken = jwt.sign({ id, firstName, lastName, email }, jwtSecret, { expiresIn: '1h' });

    const user = new UserModel({ id, firstName, lastName, email, marketingConsent, accessToken });
    await user.save();

    res.json({ id, accessToken });
  } catch (error) {
    console.error('Error in createUser:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await UserModel.findOne({ id });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    if (!user.marketingConsent) {
      delete user.email;
    }

    res.json(user);
  } catch (error) {
    console.error('Error in getUser:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { createUser, getUser };
