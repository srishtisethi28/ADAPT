import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://srishtisethi31:CJN16dNzlQuk3FNM@cluster0.hx7wm.mongodb.net/adapt').then(()=>console.log("DB Connected"))
};
