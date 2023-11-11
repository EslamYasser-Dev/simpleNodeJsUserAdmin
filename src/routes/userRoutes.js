const express = require('express');
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', userController.createUser);
router.get('/:id', userController.getUser); // without auth


//if you want to make auth just uncomment this code  line 12 and commont line 8
// router.get('/:id', authMiddleware, userController.getUser);


module.exports = router;
