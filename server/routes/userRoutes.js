const express = require("express")
const { createNewUser, getUsers, LoginUser, getUserInfo, deleteUserById, updateUserById, getUserByname, countusers } = require("../controllers/userControllers")
const { protect, isAdmin } = require("../middlewares/protect")
const router = express.Router()

router.post("/register",createNewUser)
router.post("/login",LoginUser)
router.get("/allusers",getUsers)
router.get("/userdata",protect,getUserInfo)
router.delete("/deleteuser/:id",protect,isAdmin,deleteUserById)
router.put("/updateuser/:id",protect,isAdmin,updateUserById)
router.get("/countusers",countusers)
module.exports = router