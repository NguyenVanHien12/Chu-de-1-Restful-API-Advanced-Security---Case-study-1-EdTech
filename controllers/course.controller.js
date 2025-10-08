const Course = require('../models/course.model');

exports.getCourses = async (req, res) => {
    try {
        const courses = await Course.findAll();
        res.json(courses);
    } catch (err) {
        res.status(500).json({error: 'Loi lay danh sach khoa hoc'});
    }
};

exports.createCourse = async (req, res) => {
    try {
        const {name, description, thumbnail, level} = req.body;
        const course = await Course.create({
            name, description, thumbnail, level
        });
        res.status(201).json(course)
    } catch (err) {
        res.status(500).json({error: 'Loi tao khoa hoc'});
    }
};