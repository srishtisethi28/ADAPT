import express from 'express'
import { addItem, listitem, removeItem } from '../controllers/itemController.js'
import multer from 'multer'

const itemRouter =express.Router();

//Image Storage

const storage=multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`)
    }
})

const upload= multer({storage:storage})

itemRouter.post('/add',upload.single("image"),addItem);
itemRouter.get('/list',listitem)
itemRouter.post('/remove',removeItem)


export default itemRouter