const {DataTypes} = require('sequelize');
const sequelize = require('../config/database');
const Course = require('./course.model');

const Lesson = sequelize.define('Lesson', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    content: {
        type: DataTypes.TEXT,
    },
    order: {
        type: DataTypes.INTEGER,
        defaultValue: 1,
    },
    courseId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Course,
            key: 'id',
        },
    },
}, {
    timestamps: true,
    tableName: 'lessons'
});

//Thiet lap moi quan he 
Course.hasMany(Lesson, {foreignKey: 'courseId'});
Lesson.belongsTo(Course, {foreignKey: 'courseId'});

module.exports = Lesson;