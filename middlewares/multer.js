const { status } = require("../constants/statusCodes");
const { apiResponse } = require("../helpers/apiResponse");

const handleMulterErrors = (err, req, res, next) => {
    if (err) {
        const response = apiResponse(null, status.badRequest, err.message)

        return res.status(status.created).json(response);
    }
    else {
        next()
    }
}


module.exports = { handleMulterErrors }