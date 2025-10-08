const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

router.get('/users', userController.getUsers);
router.post('/users', userController.registerUser);

module.exports = router;