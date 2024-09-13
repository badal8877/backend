// fileUpload.controller.js
import { Router } from 'express';
import FileUpload from '../models/fileUpload.model.js'
import { upload } from '../middlewares/multer.middlewares';

const router = Router(); // Initialize the Router instance

// Define the POST route for file uploads

router.post('/upload', upload.single('Document'), async (req, res) => {
    try {
      const file = new FileUpload({
        Department: req.body.Department,
        HeadLine: req.body.HeadLine,
        Issue_Date: req.body.Issue_Date,
        Description: req.body.Description,
        Document: req.file.path
      });
      await file.save();
      res.status(201).json({ message: 'File uploaded successfully' });
    } catch (err) {
      res.status(500).json({ message: 'Error uploading file' });
    }
  });
  
  export default router;
