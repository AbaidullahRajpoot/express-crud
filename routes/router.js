import express from "express"
import UserController from '../controller/userController.js';
import ProductController from '../controller/productController.js';
import OrderController from '../controller/orderController.js';

//================Initialize Express ==============

const router = express.Router()

//================Routes=============================

router.get('/', UserController.index)
router.post('/addUser', UserController.addUser)
router.get('/editUser/:id', UserController.editUser)
router.post('/updateUser', UserController.updateUser)
router.get('/deleteUser/:id', UserController.deleteUser)

router.get('/addproduct', ProductController.index)

router.get('/addorder', OrderController.index)

router.get('/getOrderDataWithJoin', OrderController.getOrderDataWithJoin)

router.all('*', (req, res) => {
    res.send('Page Not Found..')
})

export default router