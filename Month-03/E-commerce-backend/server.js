import express from 'express'
import cors from 'cors'
import 'dotenv/config' 
import connectDB from './src/config/db.js'
import connectCloudinary from './src/config/cloudinary.js'
import userRouter from './src/routes/userRoute.js'
import productRouter from './src/routes/productRoute.js'
import cartRouter from './src/routes/cartRoute.js'
import orderRouter from './src/routes/orderRoute.js'

//App config
const app = express()
const port = process.env.PORT || 4000
connectDB();
connectCloudinary();
// middlewares
app.use(express.json())
app.use(cors())
console.log(import.meta.url);

// // api endpoints
app.use('/api/user', userRouter);
app.use('/api/product', productRouter);
app.use('/api/cart', cartRouter);
app.use('/api/order', orderRouter);
app.get('/', (req, res) => {
    res.send("API working")
})

app.listen(port, ()=> console.log('Server started on port: ' + port));