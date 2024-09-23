import dotenv from "dotenv";
import connectDB from "./db/database.js";
import { app } from "./app.js";

dotenv.config({
    path: './env'
})

// Connect to MongoDB
connectDB()
    .then(() => {
        // Start the server

        app.listen(process.env.PORT || 8000, () => {
            console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
        })

        // Handle errors that occur with the server
        app.on('error', (error) => {
            console.error('Server error:', error);
        });
    })
    .catch((err) => {
        console.error('MongoDB connection failed:', err);
    });


