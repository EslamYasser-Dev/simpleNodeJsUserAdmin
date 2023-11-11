const crypto = require('crypto');

const generateHash = (email) => {
  return crypto.createHash('sha1')
    .update(email + '450d0b0db2bcf4adde5032eca1a7c416e560cf44')
    .digest('hex');
};

module.exports = generateHash;
