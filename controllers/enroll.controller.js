const Enrollment = require('../models/enrollment.model');
const User = require('../models/user.model');
const Course = require('../models/course.model');

exports.enrollCourse = async (req, res) => {
    try {
        const {userId, courseId} = req.body;
        // 1. Kiểm tra User và Course có tồn tại không (Logic hợp lệ Task 6/7)
        const user = await User.findByPk(userId);
        const course = await Course.findByPk(courseId);

        if (!user) {
            return res.status(404).json({ error: 'Người dùng không tồn tại' });
        }
        if (!course) {
            return res.status(404).json({ error: 'Khóa học không tồn tại' });
        }
        const enrollment = await Enrollment.create({
            userId, courseId
        });
        res.status(201).json(enrollment);
    } catch (err) {
        res.status(500).json({ error: 'Lỗi đăng ký khóa học' });
    }
};