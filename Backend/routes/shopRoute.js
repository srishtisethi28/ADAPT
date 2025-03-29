import express from 'express'
import { addShop, listShop, removeShop } from '../controllers/shopController.js'
import multer from 'multer'

const shopRouter =express.Router();

//Image Storage

const storage=multer.diskStorage({
    destination:"ShopData",
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`)
    }
})

const upload= multer({storage:storage})

shopRouter.post('/add',upload.single("image"),addShop);
shopRouter.get('/list',listShop)
shopRouter.post('/remove',removeShop)


export default shopRouter