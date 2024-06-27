import mongoose from "mongoose";

//====================Define Schema======================

const productSchema = new mongoose.Schema({
    productName:{type:String , required:true},
    productPrice:{type: Number , required:true},
})

//====================Create Model======================

const ProductModel = mongoose.model('product',productSchema);

export default  ProductModel;

    
