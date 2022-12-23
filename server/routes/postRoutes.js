const express = require("express")
const { createNewCard, getCards, countProducts, deleteProductById, updateProductById } = require("../controllers/postControllers")
const router = express.Router()
const multer  = require('multer')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null,'uploads')
    },
    filename: function (req, file, cb) {
      const fileName = Date.now() + '-' + file.originalname ;
      cb(null, fileName)
    }
  })
  const upload = multer({ storage: storage ,
  //   limits: {
  //     fileSize: 1000000 // 1000000 Bytes = 1 MB
  //   },
  //   fileFilter(req, file, cb) {
  //     if (!file.originalname.match(/\.(png|jpg)$/)) { 
  //        // upload only png and jpg format
  //        return cb(new Error('Please upload a Image'))
  //      }
  //    cb(undefined, true)
  // }
  
  })
  router.post("/card",upload.single('card-image'),createNewCard)

// router.post("/card",createNewCard)
router.get("/cardList",getCards)
router.get("/countProducts",countProducts)
router.delete("/deleteProduct/:id",deleteProductById)
router.put("/updateProduct/:id",upload.single('card-image'),updateProductById)
module.exports = router