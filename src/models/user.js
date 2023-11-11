const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  id: String,
  firstName: String,
  lastName: String,
  email: String,
  marketingConsent: Boolean,
  accessToken: String,
});

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;
