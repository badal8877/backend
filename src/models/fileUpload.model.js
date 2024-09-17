// fileUpload.model.js
import mongoose, { Schema } from "mongoose";

const fileUploadSchema = new Schema({

    Department: {
        type: String,
        required: true
    },
    HeadLine: {
        type: String,
        required: true
    },
    Issue_Date: {
        type: Date,
        default: Date.now, 
        required: true
    },
    Description: {
        type: String,
        required: true
    },
    Document: {
        type: String,
        required: true
    }
});



export const FileUpload = mongoose.model('FileUpload', fileUploadSchema);
