import mongoose from "mongoose";

const connectDB = async (DataBase_Url)=>{
try {
    const DB_Option ={
        dbName:"userRecords"
    }
    await mongoose.connect(DataBase_Url,DB_Option)
    console.log("DataBase Connect Succcessfully........")
} catch (error) {
    console.log(error)
}
}
export default connectDB