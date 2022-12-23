const Card = require("../models/postModel")

exports.createNewCard = async(req,res)=>{
    try {
        
        // const newCard = await Card.create(req.body)
        // res.json(newCard)
        const imgPath=`http://localhost:5000/uploads/${req.file.filename}`
        const {name,reference,description,category,price}=req.body
        const newCard = await Card.create({image:imgPath,name,reference,description,category,price})
        res.json(newCard)
        .status(200)
        console.log(req.file)
    } catch (error) {
       
        console.log(error)
        return res.status(500).json({msg:"something went wrong4"})
        
    }
}

exports.getCards = async(req,res)=>{
    try {
        const cardList =await Card.find()
        res.json(cardList)
    } catch (error) {
        console.log(error)
        res.status(500).json({msg:"something went wrong"})
    }
}

exports.countProducts = async(req,res)=>{
    try {
        
        const count =await Card.countDocuments()
        res.json(count)
        console.log("count:",{count})
        
    } catch (error) {
        console.log(error)
        res.status(500).json({msg:"something went wrong122"})
    }
}
exports.deleteProductById = async(req,res)=>{
    try {
        const test=req.body.id;
        const productdeleteInfo =await Card.findByIdAndDelete(req.params.id)
        res.json(productdeleteInfo)
        console.log("id:",{test})
        console.log("productInfo:",{productdeleteInfo})
    } catch (error) {
        console.log(error)
        res.status(500).json({msg:"something went wrong23"})
    }
}
exports.updateProductById = async(req,res)=>{
    try {
        const test=req.body.id;
        const imgPath=`http://localhost:5000/uploads/${req.file.filename}`
        const {name,reference,description,category,price}=req.body

        const productupdate =await Card.findByIdAndUpdate(req.params.id,{image:imgPath,name,reference,description,category,price},{new:true})
        res.json(productupdate)
        console.log("id:",{test})
        console.log("productInfo:",{productupdate})
        // console.log("date",productupdate.updatedAt);
    } catch (error) {
        console.log(error)
        res.status(500).json({msg:"something went wrong03"})
    }
}