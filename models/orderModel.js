import mongoose from "mongoose";

//====================Define Schema======================

const orderSchema = new mongoose.Schema({
    userId: {type:mongoose.Schema.Types.ObjectId , required:true},  
    productId: {type:mongoose.Schema.Types.ObjectId , required:true}, 
    quantity: {type:mongoose.Schema.Types.Number , required:true},
})

//====================Create Model======================

const OrderModel = mongoose.model('order',orderSchema);

export default  OrderModel;
