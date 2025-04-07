import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import itemRouter from "./routes/itemRoute.js"
import "dotenv/config" 
import userRouter from "./routes/userRoute.js"
import shopRouter from "./routes/shopRoute.js"
import cartRouter from "./routes/cartRoute.js"
import contactRouter from "./routes/conatctRoutes.js"
import { EventEmitter } from 'events';
import orderRouter from "./routes/orderRoute.js"
EventEmitter.defaultMaxListeners = 20; 


//app consif
const app=express()
const port=3000

//middleware
app.use(express.json())
app.use(cors({
    origin: 'http://localhost:5173', // Allow frontend to connect
    credentials: true, // Allow credentials (cookies, authorization headers, etc.)
  }));

//db Connection
connectDB();

//api endpoints
app.use("/api/item",itemRouter)
app.use("/api/shop",shopRouter)
app.use("/images",express.static('uploads'))
app.use("/shopImages",express.static('ShopData'))
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)
app.use("/api/contact", contactRouter);

app.get("/",(req,res)=>{
    res.send("Api Working")
})

app.listen(port,()=>{
    console.log(`Server started on http://localhost:${port} `)
})
