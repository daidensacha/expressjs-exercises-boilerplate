const save_profile_image = (req, res, next) => {
  console.log('save_profile_image');
  console.log(req.file);
  const { filename, path } = req.file;
  try {
    // return res.status(201).send("image uploaded");
    return res
      .status(201)
      .send(
        `<h2>Here is the picture:</h2><img src="/images/uploads/${filename}" alt=”something”/>`,
      );
  } catch (err) {
    console.log(err);
    next(err);
  }
};

const save_cat_images = (req, res, next) => {
  const cats = req.files;
  try {
     res.status(201).send(
      `<h2>Here is the picture:</h2>
      ${cats.map(cat => `<img src="/images/uploads/${cat.filename}" alt="${cat.fieldname}"/><br />`)}`,
    );
  } catch (err) {
    console.log(err);
    next(err);
  }
};

module.exports = {
  save_profile_image,
  save_cat_images,
};
