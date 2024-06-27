import express from "express"
import { index, addUser, editUser, updateUser, deleteUser } from "../controller/userController.js"
//================Initialize Express ==============

const router = express.Router()

//================Routes=============================

router.get('/', index)
router.post('/addUser', addUser)
router.get('/editUser/:id', editUser)
router.post('/updateUser', updateUser)
router.get('/deleteUser/:id', deleteUser)

router.all('*', (req, res) => {
    res.send('Page Not Found..')
})

export default router