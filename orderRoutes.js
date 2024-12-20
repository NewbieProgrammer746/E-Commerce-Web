const express = require('express');
const router = express.Router();
const { createOrder, getOrderById, getAllOrders, updateOrderStatus } = require('../controllers/orderController');

// เส้นทางสำหรับสร้างคำสั่งซื้อใหม่
router.post('/', createOrder);

// เส้นทางสำหรับดึงข้อมูลคำสั่งซื้อจาก ID
router.get('/:id', getOrderById);

// เส้นทางสำหรับดึงคำสั่งซื้อทั้งหมด
router.get('/', getAllOrders);

// เส้นทางสำหรับอัปเดตสถานะคำสั่งซื้อ
router.put('/:id', updateOrderStatus);

module.exports = router;
