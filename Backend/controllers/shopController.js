import shopModel from "../models/shopModel.js";
import fs from 'fs'

//add item

const addShop=async(req,res)=>{

    let image_filename= `${req.file.filename}`;
    const shop= new shopModel({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        category:req.body.category,
        image:image_filename
    })

    try {
        await shop.save();
        res.json({
            sucess:true,
            message:"shop item Added"
        })
    } catch (error) {
        console.log(error)
        res.json({
            sucess:false,
            message:"Error saving shop Item"
        })
    }

}

//all food list

const listShop=async(req,res)=>{
    try {
        const shops= await shopModel.find({});
        res.json({
            sucess:true,
            data:shops
        })
    } catch (error) {
        console.log(error);
        res.json({
            sucess:false,
            message:"Error listing shop items"
        })
    }
}

//remove item
const removeShop= async(req,res)=>{
    try {
        const shop= await shopModel.findById(req.body.id);
        fs.unlink(`ShopData/${shop.image}`,()=>{})

        await shopModel.findByIdAndDelete(req.body.id)
        res.json({
            sucess:true,
            message:"Shop Item Removed"
        })
    } catch (error) {
        console.log(error)
        res.json({
            sucess:false,
            message:"Error removing"
        })
    }
}

export {addShop,listShop,removeShop}