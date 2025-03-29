import itemModel from "../models/itemModel.js";
import fs from 'fs'

//add item

const addItem=async(req,res)=>{

    let image_filename= `${req.file.filename}`;
    const item= new itemModel({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        category:req.body.category,
        image:image_filename
    })

    try {
        await item.save();
        res.json({
            sucess:true,
            message:"item Added"
        })
    } catch (error) {
        console.log(error)
        res.json({
            sucess:false,
            message:"Error saving Item"
        })
    }

}

//all food list

const listitem=async(req,res)=>{
    try {
        const items= await itemModel.find({});
        res.json({
            sucess:true,
            data:items
        })
    } catch (error) {
        console.log(error);
        res.json({
            sucess:false,
            message:"Error listing items"
        })
    }
}

//remove item
const removeItem= async(req,res)=>{
    try {
        const item= await itemModel.findById(req.body.id);
        fs.unlink(`uploads/${item.image}`,()=>{})

        await itemModel.findByIdAndDelete(req.body.id)
        res.json({
            sucess:true,
            message:"Item Removed"
        })
    } catch (error) {
        console.log(error)
        res.json({
            sucess:false,
            message:"Error removing"
        })
    }
}

export {addItem,listitem,removeItem}