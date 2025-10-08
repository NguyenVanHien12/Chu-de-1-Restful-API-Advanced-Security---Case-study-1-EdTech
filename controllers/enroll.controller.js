const Enrollment = require('../models/enrollment.model');

exports.enrollCourse = async (req, res) => {
    try {
        const {userId, courseId} = req.body;
        const enrollment = await Enrollment.create({
            userId, courseId
        });
        res.status(201).json(enrollment);
    } catch (err) {
        res.status(500).json({ error: 'Lỗi đăng ký khóa học' });
    }
};