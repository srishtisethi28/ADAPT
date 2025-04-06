import userModel from "../models/userModel.js"

const addToCart= async(req,res)=>{
    try {
        let userData= await userModel.findById(req.body.userId);

        let cartData= await userData.cartData;
        if(!cartData[req.body.itemId])
        {
            cartData[req.body.itemId]=1;
        }
        else
        {
            cartData[req.body.itemId]+=1;
        }
        await userModel.findByIdAndUpdate(req.body.userId,
            {cartData}
        )
        res.json({
            sucess:true,
            message:"Added to Cart"
        })
    } catch (error) {
        console.log(error);
        res.json({
            sucess:false,
            message:"error while adding to cart"
        })
    }
}

const removeFromCart= async(req,res)=>{
    try {
        let userData= await userModel.findById(req.body.userId);
        let cartData= await userData.cartData;
        if(cartData[req.body.itemId]>0)
        {
            cartData[req.body.itemId]-=1;
        }
        await userModel.findByIdAndUpdate(req.body.userId,{cartData});
        res.json({
            sucess:true,
            message:"removed from cart"
        })

    } catch (error) {
        console.log(error)
        res.json({
            sucess:false,
            message:"Error"
        })
    }
}
const getCart= async(req,res)=>{
    try {
        const userData= await userModel.findById(req.body.userId);
        let cartData= await userData.cartData;
        res.json({
            sucess:true,
            cartData
        })
    } catch (error) {
        console.log(error);
        res.json({
            sucess:false,
            message:"Error"
        })
    }
}

export {addToCart,removeFromCart,getCart}
