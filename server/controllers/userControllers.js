const Person = require("../models/userModel")
const bcrypt = require("bcryptjs")
const jwt=require("jsonwebtoken")



exports.createNewUser = async(req,res)=>{
    try {
        const {email,username,password} = req.body
        const checkUser = await Person.findOne({$or:[{email},{username}]})
        if(checkUser?.email === email)return res.status(500).json({msg:"email already exists"})
        if(checkUser?.username === username) return res.status(500).json({msg:"username already exists"})
        const hashPassword=await bcrypt.hash(password,10)
        const newPerson = await Person.create({...req.body,password:hashPassword})
        res.json(newPerson)
    } catch (error) {
        console.log(error)
        return res.status(500).json({msg:"something went wrong"})
        
    }
}

exports.LoginUser = async(req,res)=>{
    try {
        const existUser=await Person.findOne({email:req.body.email})
        console.log("existuser:",{existUser})
        if(!existUser) return res.status(404).json({msg:'email does not exist'})
        // if(existUser?.username !==req.body.username) return res.status(404).json({msg:'username does not exist'})
        const validatePW=await bcrypt.compare(req.body.password,existUser.password)
        if (!validatePW) return res.status(400).json({msg:'wrong password'})
        const token=jwt.sign({
            sub:existUser._id,
            email:existUser.email,
            username:existUser.username,
            role:existUser.role
        },process.env.JWT_SECRET,{expiresIn:'1d'})
        res.json({token,userdata:existUser})
    } catch (error) {
        console.log(error)
        res.status(500).json({msg:"something went wrong"})  
    }
}

exports.getUsers = async(req,res)=>{
    try {
        const userList =await Person.find()
        res.json(userList)
        console.log("userList:",{userList})
        
    } catch (error) {
        console.log(error)
        res.status(500).json({msg:"something went wrong"})
    }
}
exports.getUserInfo = async(req,res)=>{
    try {
        const test=req.personId;
        const userInfo =await Person.findById(req.personId)
        res.json(userInfo)
        console.log("id:",{test})
        console.log("userInfo:",{userInfo})
        console.log("dat",userInfo.createdAt);
    } catch (error) {
        console.log(error)
        res.status(500).json({msg:"something went wrong"})
    }
}
exports.updateUserById = async(req,res)=>{
    try {
        const test=req.body.id;
        const userupdate =await Person.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.json(userupdate)
        console.log("id:",{test})
        console.log("userInfo:",{userupdate})
        console.log("date",userupdate.updatedAt);
    } catch (error) {
        console.log(error)
        res.status(500).json({msg:"something went wrong"})
    }
}
exports.deleteUserById = async(req,res)=>{
    try {
        const test=req.body.id;
        const userdeleteInfo =await Person.findByIdAndDelete(req.params.id)
        res.json(userdeleteInfo)
        console.log("id:",{test})
        console.log("userInfo:",{userdeleteInfo})
    } catch (error) {
        console.log(error)
        res.status(500).json({msg:"something went wrong"})
    }
}
exports.countusers = async(req,res)=>{
    try {
        
        const count =await Person.countDocuments()
        res.json(count)
        console.log("count:",{count})
        
    } catch (error) {
        console.log(error)
        res.status(500).json({msg:"something went wrong120"})
    }
}