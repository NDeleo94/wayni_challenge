const multer = require('multer');
const { fileFilter } = require('../helpers/multer');

const storage = multer.memoryStorage();

const uploader = multer({
    storage: storage,
    fileFilter: fileFilter,
})

module.exports = { uploader }