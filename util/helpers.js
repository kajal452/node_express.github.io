const multer = require('multer');
const path = require('path');
const imageFilter = function(req, file, cb) {
    // Accept images only
    if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
        req.fileValidationError = 'Only image files are allowed!';
        return cb(new Error('Only image files are allowed!'), false);
    }
    cb(null, true);
};
const storage = multer.diskStorage({
    destination: function (request, file, callback) {
        callback(null, './public/uploads/');
    },
    filename: function (request, file, callback) {
        console.log(file);
        callback(null,Date.now()+'-'+ file.originalname)
    }
});

module.exports.imageFilter = imageFilter;
module.exports.multer_storage= storage;