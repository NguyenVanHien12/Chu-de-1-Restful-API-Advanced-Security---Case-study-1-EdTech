const User = require('../models/user.model');

exports.registerUser = async(req, res) => {
    try {
        const {name, email, password, role} = req.body;
        const user = await User.create({
            name, email, password, role
        });
        res.status(201).json(user);
    } catch (err) {
        // Kiểm tra lỗi trùng lặp email (Task 5)
        if (err instanceof UniqueConstraintError) {
            // Trả về 409 Conflict cho lỗi nghiệp vụ (email đã tồn tại)
            return res.status(409).json({ error: 'Email đã tồn tại. Vui lòng sử dụng email khác.' });
        }
        res.status(500).json({ error: 'Lỗi đăng ký người dùng' });
    }
};

exports.getUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: 'Lỗi lay danh sach người dùng' });
    }
}