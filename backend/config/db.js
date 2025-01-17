// import mongoose from "mongoose";
const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI , {
            useNewUrlParser : true,
        })

        console.log(`MongoDB connected :${conn.connection.host}`);
        
    } catch (error) {
     console.log(`Error : ${error.message}`);
     process.exit();
        
    }
};

// export default connectDB;
module.exports = connectDB;


