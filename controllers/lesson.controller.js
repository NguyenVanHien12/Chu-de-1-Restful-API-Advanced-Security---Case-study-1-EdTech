const Lesson = require('../models/lesson.model');
const Course = require('../models/course.model');

exports.getLessonBycourses = async(req, res) => {
    try {
        const { courseId } = req.params;
        // Kiểm tra courseId có tồn tại không
        const course = await Course.findByPk(courseId);
        if (!course) {
            return res.status(404).json({ error: 'Khóa học không tồn tại' });
        }
        const lessons = await Lesson.findAll({
            where: courseId
        });
        res.json(lessons);
        } catch (err) {
            res.status(500).json({error: 'Loi lay danh sach bai giang'})
    }
}

exports.createLesson = async(req, res) => {
    try {
        const {title, content, order, courseId} = req.body;
        if (!title || !courseId) {
            return res.status(400).json({ error: 'Thiếu tiêu đề hoặc khóa học' });
        }
        const course = await Course.findByPk(courseId);
        if (!course) {
            return res.status(404).json({ error: 'Khóa học không tồn tại' });
        }
        const lesson = await Lesson.create({
            title, content, order,courseId
        });
        res.status(201).json(lesson);
    } catch (err) {
        res.status(500).json({error: 'Loi tao bai giang'})
    }
}