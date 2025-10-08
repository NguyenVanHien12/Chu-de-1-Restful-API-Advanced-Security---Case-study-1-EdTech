const express = require('express');
const router = express.Router();
const lessonController = require('../controllers/lesson.controller');

router.get('/courses/:courseId/lessons', lessonController.getLessonBycourses);
router.post('/lessons', lessonController.createLesson);

module.exports = router;