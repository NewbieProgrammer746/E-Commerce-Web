const mongoose = require('mongoose');

// สร้าง Schema สำหรับ Order Items (รายการสินค้าในคำสั่งซื้อ)
const orderItemSchema = mongoose.Schema(
  {
    name: { type: String, required: true }, // ชื่อสินค้า
    quantity: { type: Number, required: true }, // จำนวน
    price: { type: Number, required: true }, // ราคา
    product: {
      type: mongoose.Schema.Types.ObjectId, // เชื่อมโยงกับ ID ของสินค้าในระบบ (optional)
      required: true,
      ref: 'Product', // อ้างถึง Model Product
    },
  },
  { _id: false }
);

// สร้าง Schema สำหรับ Order
const orderSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId, // เชื่อมโยงกับ User
      required: true,
      ref: 'User', // อ้างถึง Model User
    },
    orderItems: [orderItemSchema], // รายการสินค้าในคำสั่งซื้อ
    shippingAddress: {
      address: { type: String, required: true },
      city: { type: String, required: true },
      postalCode: { type: String, required: true },
      country: { type: String, required: true },
    },
    paymentMethod: {
      type: String,
      required: true,
    },
    paymentResult: {
      id: { type: String },
      status: { type: String },
      update_time: { type: String },
      email_address: { type: String },
    },
    itemsPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    taxPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    shippingPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    totalPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    isPaid: {
      type: Boolean,
      required: true,
      default: false,
    },
    paidAt: {
      type: Date,
    },
    isDelivered: {
      type: Boolean,
      required: true,
      default: false,
    },
    deliveredAt: {
      type: Date,
    },
  },
  {
    timestamps: true, // เพิ่มฟิลด์ createdAt และ updatedAt อัตโนมัติ
  }
);

// สร้าง Model
const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
