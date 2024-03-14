const multer = require('multer');
const sharp = require('sharp');
const catchAsync = require('../utils/catchAsync');
const path = require('path');

const storage = multer.memoryStorage();
const filter = (req, file, cb) => {
  if (file.mimetype.startsWith('image')) {
    return cb(null, true);
  }
  cb('Please only upload images', false);
};

const uploadImage = multer({ storage, fileFilter: filter });

export const uploadImages = (fields) => uploadImage.array(fields, 6);
export const uploadLawyersImages = uploadImage.fields([
  {
    name: 'profilePicture',
    max: 1,
  },
  { name: 'gallery', max: 6 },
]);

export const uploadBlogImages = uploadImage.fields([
  {
    name: 'coverPicture',
    max: 1,
  },
]);

export const resizeImages = (field, location, sizes) =>
  catchAsync(async (req, res, next) => {
    if (!req.files || !req.files[field]) return next();
    req.body[field] = [];

    await Promise.all(
      req.files[field].map(async (file, i) => {
        const fileName = `${field.toLowerCase().split(' ')}-${Date.now()}-${
          i + 1
        }.jpeg`;

        /**
         * THIS ASYNC FUNCTION IS FOR THE SMALL
         */
        await sharp(file.buffer)
          .resize(sizes.width / 2, sizes.height / 2)
          .jpeg({ quality: 90 })
          .toFormat('jpeg')
          .toFile(path.join(__dirname, `assets/${location}/small/${fileName}`));

        /**
         * THIS ASYNC FUNCTION IS FOR THE LARGE DEVICES
         */
        await sharp(file.buffer)
          .resize(sizes.width, sizes.height)
          .jpeg({ quality: 90 })
          .toFormat('jpeg')
          .toFile(path.join(__dirname, `assets/${location}/large/${fileName}`));

        req.body[field].push(fileName);
      })
    );
    next();
  });

export const uploadSingleImage = (field) => uploadImage.single(field);

export const resizeSingleImage = (field, location, sizes) => {
  return catchAsync(async (req, res, next) => {
    console.log(req.file, req.files);
    if (!req.file) return next();
    const filename = `${Date.now()}-${field}.jpeg`;

    await sharp(req.file.buffer)
      .resize(sizes.width, sizes.height)
      .toFormat('jpeg')
      .jpeg({ quality: 90 })
      .toFile(path.join(__dirname, `assets/${location}/large/${filename}`));

    await sharp(req.file.buffer)
      .resize(sizes.width / 2, sizes.height / 2)
      .toFormat('jpeg')
      .jpeg({ quality: 90 })
      .toFile(path.join(__dirname, `assets/${location}/small/${filename}`));

    req.body[field] = filename;
    next();
  });
};
export const resizeLawyerProfilePicture = (field, location, sizes) => {
  return catchAsync(async (req, res, next) => {
    console.log(req.file, req.files);
    if (!req.files || !req.files[field]) return next();
    const filename = `${Date.now()}-${field}.jpeg`;

    await sharp(req.files[field][0].buffer)
      .resize(sizes.width, sizes.height)
      .toFormat('jpeg')
      .jpeg({ quality: 90 })
      .toFile(path.join(__dirname, `assets/${location}/large/${filename}`));

    await sharp(req.files[field][0].buffer)
      .resize(sizes.width / 2, sizes.height / 2)
      .toFormat('jpeg')
      .jpeg({ quality: 90 })
      .toFile(path.join(__dirname, `assets/${location}/small/${filename}`));

    req.body[field] = filename;
    next();
  });
};
