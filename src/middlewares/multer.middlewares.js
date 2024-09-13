// fileUpload.middleware.js
import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './public/temp'); // Set the upload directory
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const filename = `${Date.now()}${ext}`;
    cb(null, filename);
  }
});

const fileFilter = (req, file, cb) => {
  // Allow only certain file types
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'application/pdf') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};



export const upload = multer({
  storage,
  fileFilter
});
