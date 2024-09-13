//find krna h dusra traika . how to put in database to admin username and password 
// https://www.youtube.com/watch?v=q3bV5pdVhr8
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import { Admin } from '../controllers/admin.controller.js'; // Ensure the path is correct
import dotenv from 'dotenv';

dotenv.config();

async function insertAdmin() {
    try {
        // Hash the predefined password
        const hashedPassword = await bcrypt.hash('your_predefined_password', 10);

        // Create a new admin document
        const admin = new Admin({
            username: 'admin_username',
            password: hashedPassword
        });

        // Save the admin document to the database
        await admin.save();
        console.log('Admin account inserted successfully');

    } catch (error) {
        console.error('Error inserting admin account:', error);
    } finally {
        // Disconnect from the database
        mongoose.disconnect();
    }
}

// Connect to MongoDB and insert the admin
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => insertAdmin())
.catch(error => console.error('Error connecting to MongoDB:', error));
