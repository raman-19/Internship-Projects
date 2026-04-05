import mongoose from "mongoose";
// import { DB_NAME } from "./src/constant.js";

const connectDB = async ()=>{
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/{e-commerce}`);
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`)

    }catch(err){
        console.error("Mongodb connection error",err);
        process.exit(1)
    }
}

export default connectDB;


