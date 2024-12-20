const mongoose = require('mongoose');
const bcrypt = require('bcryptjs'); // สำหรับการแฮชรหัสผ่าน

// สร้าง Schema สำหรับ User
const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true, // กำหนดว่าต้องใส่ข้อมูลนี้
    },
    email: {
      type: String,
      required: true,
      unique: true, // ต้องไม่ซ้ำกันในระบบ
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false, // ค่าเริ่มต้นคือผู้ใช้ทั่วไป (ไม่ใช่ Admin)
    },
  },
  {
    timestamps: true, // เพิ่มฟิลด์ createdAt และ updatedAt อัตโนมัติ
  }
);

// Middleware สำหรับแฮชรหัสผ่านก่อนบันทึกข้อมูล
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next(); // ถ้ารหัสผ่านไม่ได้เปลี่ยน แค่ข้าม
  }

  const salt = await bcrypt.genSalt(10); // สร้าง Salt
  this.password = await bcrypt.hash(this.password, salt); // แฮชรหัสผ่าน
});

// ฟังก์ชันสำหรับตรวจสอบรหัสผ่าน
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// สร้าง Model
const User = mongoose.model('User', userSchema);

module.exports = User;
