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
        const port = process.env.PORT || 8000;

        app.listen(port, () => {
            console.log(`Server is running at port: ${port}`);
        });

        // Handle errors that occur with the server
        app.on('error', (error) => {
            console.error('Server error:', error);
        });
    })
    .catch((err) => {
        console.error('MongoDB connection failed:', err);
    });


