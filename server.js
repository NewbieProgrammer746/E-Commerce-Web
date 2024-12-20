const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');
const orderRoutes = require('./routes/orderRoutes');
const connectDB = require('./config/db');

connectDB(); // เชื่อมต่อ MongoDB ก่อนเริ่มเซิร์ฟเวอร์

// Middleware สำหรับแปลงข้อมูล JSON
app.use(express.json());

// เชื่อมต่อ Routes
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);

// เริ่มต้นเซิร์ฟเวอร์
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
