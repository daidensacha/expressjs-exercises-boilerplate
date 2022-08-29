
const multer = require('multer');

// const { path } = require('path');
const path = require('path');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/images/uploads/')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const fileExtension = path.extname(file.originalname);
    // console.log(fileExtension);
    cb(null, file.fieldname + '-' + uniqueSuffix + fileExtension);
  }

})

// next();
const upload = multer({ storage: storage })


module.exports = upload;