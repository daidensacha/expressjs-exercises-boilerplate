var express = require('express');
// const multer = require('multer');
// const upload = require('../middlewares/destinationStorage');
// const upload = multer({ dest: 'uploads/' });
var router = express.Router();


// const {
//   save_profile_image,
// } = require("../controllers/users");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// router.route('/').post(upload.single('profile_pic'), save_profile_image);


module.exports = router;
