const {
    textfilesFormats,
    fileSizes,
} = require("../constants/filesSupported");


const isTextFile = (mimetype) => {
    if (textfilesFormats.includes(mimetype)) {
        return true
    }
    return false
}

const AllowedTextFileSize = (fileSize) => {
    if (fileSize < fileSizes.maxTextSize) {
        return true
    }
    return false
}

const fileFilter = (req, file, cb) => {
    const fileSize = parseInt(req.headers['content-length']);
    const mimetype = file.mimetype

    if (isTextFile(mimetype)) {
        if (!AllowedTextFileSize(fileSize)) {
            cb(null, false);
            return cb(new Error('Tamaño máximo del archivo de 1MB'));
        }

    } else {
        cb(null, false);
        return cb(new Error('Formato no soportado'));
    }
    cb(null, true);

}

module.exports = { fileFilter }