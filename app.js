const express = require('express');
const sequelize = require('./config/database');
const courseRoutes = require('./routes/course.routes');
const lessonRoutes = require('./routes/lesson.routes');
const userRoutes = require('./routes/user.routes');
const enrollmentRoutes = require('./routes/enrollment.routes');
require('./models');

const PORT = 3000;

const app = express();
app.use(express.json());
app.use('/api', courseRoutes);
app.use('/api', lessonRoutes);
app.use('/api', userRoutes);
app.use('/api', enrollmentRoutes);

sequelize.authenticate()
    .then(() => {
      console.log('Ket noi MySQL thanh cong');
      return sequelize.sync();
    })
    .then(() => {
      console.log('Da dong bo hoa model vs database');
    })
    .catch(err => console.error('Ket noi MySQL that bai!', err));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});