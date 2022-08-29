var express = require('express');
const multer = require('multer');
const upload = require('../middlewares/destinationStorage');
var router = express.Router();

const { save_profile_image, save_cat_images } = require('../controllers/users');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router
  .route('/upload-profile-pic')
  .post(upload.single('profile_pic'), save_profile_image);
router
  .route('/upload-cat-pics')
  .post(upload.array('cat_pics'), save_cat_images);

module.exports = router;
