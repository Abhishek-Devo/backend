//mongoose se db connect karenge
import mongoose from "mongoose";
import { DB_name } from "../constants.js";

const connectDB=async()=>{
    try {
        //holding response from mongoose after connection
       const connectionInstance = await mongoose.connect(`${process.env.MONGO_DB_URI}/${DB_name}`);
       console.log(`\n MongoDB connected !! DB Host : ${connectionInstance.connection.host}`)

    } catch (error) {
        console.log("MongoDB connection error : ",error);
        process.exit(1)
    }
}
export default connectDB;