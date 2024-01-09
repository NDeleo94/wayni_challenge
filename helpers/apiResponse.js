const apiResponse = (data, status = 200, message = 'Success') => {
    return {
        data,
        status,
        message,
    };
};

module.exports = {
    apiResponse,
};