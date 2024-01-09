const { messages } = require('../constants/messages');
const { status } = require('../constants/statusCodes');
const { apiResponse } = require('../helpers/apiResponse');
const DebtorService = require('../services/debtor');

const createDebtor = async (req, res) => {
    const debtorData = req.body;

    try {
        const debtor = await DebtorService.createDebtor(debtorData);

        const response = apiResponse(debtor, status.created, messages.created)

        return res.status(status.created).json(response);
    } catch (error) {
        const response = apiResponse(null, status.badRequest, messages.badRequest)

        return res.status(status.badRequest).json(response);
    }
};

const getAllDebtors = async (req, res) => {
    try {
        const debtors = await DebtorService.getAllDebtors();

        const response = apiResponse(debtors, status.success, messages.success)

        return res.status(status.success).json(response);
    } catch (error) {
        const response = apiResponse(null, status.internalServerError, messages.internalServerError)

        return res.status(status.internalServerError).json(response);
    }
};

const getDebtorById = async (req, res) => {
    const debtorId = req.params.id;

    try {
        const debtor = await DebtorService.getDebtorById(debtorId);

        if (!debtor) {
            const response = apiResponse(null, status.notFound, messages.notFound)

            return res.status(status.notFound).json(response);
        }

        const response = apiResponse(debtor, status.success, messages.success)

        return res.status(status.success).json(response);
    } catch (error) {
        const response = apiResponse(null, status.internalServerError, messages.internalServerError)

        return res.status(status.internalServerError).json(response);
    }
};

const getDebtorByCode = async (req, res) => {
    const debtorCode = req.params.code;

    try {
        const debtor = await DebtorService.getDebtorByCode(debtorCode);

        if (!debtor) {
            const response = apiResponse(null, status.notFound, messages.notFound)

            return res.status(status.notFound).json(response);
        }

        const response = apiResponse(debtor, status.success, messages.success)

        return res.status(status.success).json(response);
    } catch (error) {
        const response = apiResponse(null, status.internalServerError, messages.internalServerError)

        return res.status(status.internalServerError).json(response);
    }
};

const updateDebtor = async (req, res) => {
    const debtorId = req.params.id;
    const debtorData = req.body;

    try {
        const debtor = await DebtorService.updateDebtor(debtorId, debtorData);

        if (!debtor) {
            const response = apiResponse(null, status.notFound, messages.notFound)

            return res.status(status.notFound).json(response);
        }

        const response = apiResponse(debtor, status.success, messages.success)

        return res.status(status.success).json(response);
    } catch (error) {
        const response = apiResponse(null, status.badRequest, messages.badRequest)

        return res.status(status.badRequest).json(response);
    }
};

const deleteDebtor = async (req, res) => {
    const debtorId = req.params.id;

    try {
        const debtor = await DebtorService.deleteDebtor(debtorId);

        if (!debtor) {
            const response = apiResponse(null, status.notFound, messages.notFound)

            return res.status(status.notFound).json(response);
        }

        const response = apiResponse(debtor, status.success, messages.success)

        return res.status(status.success).json(response);
    } catch (error) {
        const response = apiResponse(null, status.badRequest, messages.badRequest)

        return res.status(status.badRequest).json(response);
    }
};

module.exports = {
    getAllDebtors,
    getDebtorById,
    getDebtorByCode,
    createDebtor,
    updateDebtor,
    deleteDebtor,
};