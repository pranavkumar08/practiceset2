import mongoose from "mongoose";
const connectdb= async()=>{
 try {
    await mongoose.connect(process.env.MONGODB_URL)
    console.log("the database is connected ")
 } catch (error) {
    console.log("mongo db is not connected ")
 }
}

export default connectdb;