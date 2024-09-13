import mongoose from "mongoose";

import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        const coneectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log(`\n MongoDb Connected !! DB HOST: ${coneectionInstance.connection.host}`)
    } catch (error) {
        console.log("MongoDb Connection error", error);
        process.exit(1)
    }
}

export default connectDB

