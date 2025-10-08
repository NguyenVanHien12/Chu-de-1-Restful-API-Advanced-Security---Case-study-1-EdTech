const express = require('express');
const router = express.Router();
const enrollmentController = require('../controllers/enroll.controller');

router.post('/enrollments', enrollmentController.enrollCourse);

module.exports = router;