import mongoose from "mongoose";
const shopSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true,
    },
    price:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    }
})

const shopModel=mongoose.models.shop|| mongoose.model("shop",shopSchema);
export default shopModel;