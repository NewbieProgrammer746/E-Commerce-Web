const express = require('express');
const router = express.Router();
const { registerUser, loginUser, getUserProfile, updateUserProfile } = require('../controllers/userController');

// เส้นทางสำหรับลงทะเบียนผู้ใช้ใหม่
router.post('/register', registerUser);

// เส้นทางสำหรับล็อกอิน
router.post('/login', loginUser);

// เส้นทางสำหรับดึงข้อมูลโปรไฟล์ของผู้ใช้
router.get('/profile', getUserProfile);

// เส้นทางสำหรับอัปเดตข้อมูลโปรไฟล์ของผู้ใช้
router.put('/profile', updateUserProfile);

module.exports = router;
