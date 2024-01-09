const Router = require('express');
const FileController = require('../controllers/file');
const { uploader } = require('../config/multer');
const router = Router();

router.post('/upload/debtors',
    uploader.single('file'),
    FileController.uploadFileDebtors
);


module.exports = router