const util = require("util");
const multer = require("multer");
const maxSize = 2 * 1024 * 1024;

const storage = multer.diskStorage({
  destination: 'public/img/',
  filename: (req, file, cb) => {
    console.log(file.originalname);
    cb(null, file.originalname);
  },
});

const uploadFileMiddleware = multer({
  storage: storage,
  limits: { fileSize: maxSize },
}).single("profile");

module.exports = uploadFileMiddleware;