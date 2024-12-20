// ตัวอย่างการจัดการข้อมูลผู้ใช้
const registerUser = (req, res) => {
    const { name, email, password } = req.body;

    // ตัวอย่าง response (คุณสามารถเชื่อมต่อกับ MongoDB ได้ในส่วนนี้)
    res.status(201).json({
        message: 'User registered successfully',
        user: { id: 1, name, email }
    });
};

const loginUser = (req, res) => {
    const { email, password } = req.body;

    // ตรวจสอบข้อมูลผู้ใช้ (ตัวอย่าง Response)
    res.status(200).json({
        message: 'Login successful',
        token: 'fake-jwt-token',
        user: { id: 1, email }
    });
};

const getUserProfile = (req, res) => {
    // ตัวอย่างข้อมูลโปรไฟล์
    res.status(200).json({
        id: 1,
        name: 'John Doe',
        email: 'john@example.com'
    });
};

const updateUserProfile = (req, res) => {
    const { name, email } = req.body;

    // อัปเดตข้อมูลผู้ใช้ (ตัวอย่าง Response)
    res.status(200).json({
        message: 'User profile updated',
        user: { id: 1, name, email }
    });
};

module.exports = { registerUser, loginUser, getUserProfile, updateUserProfile };
