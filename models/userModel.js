import mongoose from "mongoose";

//====================Define Schema======================

const userSchema = new mongoose.Schema({
    userName:{type:String , required:true},
    userEmail:{type:String , required:true},
    userAddress:{type:String , required:true},
    userPhone:{type:String , required:true}
})

//====================Create Model======================

const userModel = mongoose.model('user',userSchema);

export default  userModel;

    
