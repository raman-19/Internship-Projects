import mongoose from "mongoose";

const orderSchemea = new mongoose.Schema({
    userId:{
        type:String,
        required:true,
    },
    items:{
        type:Array,
        required:true,
    },
    amount:{
        type:Number,
        required:true,
    },
    address:{
        type:Object,
        required:true,
    },
    status:{
        type:String,
        default:"pending",
    },
    PaymentAddress:{
        type:Object,
        required:true,
    },
    payment:{
        type:String,
        required:true,
    },
    date:{
        type:Date,
        default:Date.now,
    }       
})

const orderModel = mongoose.model("orders",orderSchemea)
export default orderModel;