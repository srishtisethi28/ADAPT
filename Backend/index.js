// index.js (updated)
import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import itemRouter from "./routes/itemRoute.js"
import userRouter from "./routes/userRoute.js"
import shopRouter from "./routes/shopRoute.js"
import cartRouter from "./routes/cartRoute.js"
import contactRouter from "./routes/conatctRoutes.js"
import orderRouter from "./routes/orderRoute.js"
import resourceRouter from "./routes/resourceRoute.js"   // <-- ADDED
import { EventEmitter } from 'events';
import dotenv from "dotenv";
dotenv.config();

EventEmitter.defaultMaxListeners = 20; 

//app config
const app = express();
const port = process.env.PORT;

//middleware
app.use(express.json());
app.use(cors({
    origin: [process.env.FRONTEND_URL, process.env.ADMIN_URL , "http://localhost:5173"], 
    credentials: true, 
}));

//db Connection
connectDB();

//api endpoints
app.use("/api/item", itemRouter)
app.use("/api/shop", shopRouter)
app.use("/images", express.static('uploads'))
app.use("/shopImages", express.static('ShopData'))
app.use("/api/user", userRouter)
app.use("/api/cart", cartRouter)
app.use("/api/order", orderRouter)
app.use("/api/contact", contactRouter)
app.use("/api/resource", resourceRouter)   

app.get("/", (req, res) => {
    res.send("Api Working")
})

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`)
})
