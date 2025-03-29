import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import itemRouter from "./routes/itemRoute.js"
import "dotenv/config" 
import userRouter from "./routes/userRoute.js"
import shopRouter from "./routes/shopRoute.js"

//app consif
const app=express()
const port=3000

//middleware
app.use(express.json())
app.use(cors())

//db Connection
connectDB();

//api endpoints
app.use("/api/item",itemRouter)
app.use("/api/shop",shopRouter)
app.use("/images",express.static('uploads'))
app.use("/shopImages",express.static('ShopData'))
app.use("/api/user",userRouter)

app.get("/",(req,res)=>{
    res.send("Api Working")
})

app.listen(port,()=>{
    console.log(`Server started on http://localhost:${port} `)
})
//mongodb+srv://srishtisethi31:CJN16dNzlQuk3FNM@cluster0.hx7wm.mongodb.net/
//CJN16dNzlQuk3FNM