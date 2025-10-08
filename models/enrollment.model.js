const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./user.model');
const Course = require('./course.model');

const Enrollment = sequelize.define('Enrollment', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    }, userId: {
        type: DataTypes.INTEGER,
        allowNull: false, 
        references: {
            model: User,
            key: 'id'
        },
    },
    courseId: {
        type: DataTypes.INTEGER,
        allowNull: false, 
        references: {
            model: Course,
            key: 'id'
        },
    }, 
    enrolledAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    } 
}, {
    timestamps: true,
    tableName: 'enrollments'
});

//Thiet lap quan he
User.hasMany(Enrollment, {foreignKey: 'userId'});
Course.hasMany(Enrollment, {foreignKey: 'courseId'});
Enrollment.belongsTo(User, {foreignKey: 'userId'});
Enrollment.belongsTo(Course, {foreignKey: 'courseId'});

module.exports = Enrollment;