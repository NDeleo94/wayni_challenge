const Debtor = require('../models/debtor');

const createDebtor = async (data) => {
    try {
        const debtor = new Debtor(data);
        await debtor.save();
        return debtor;
    } catch (error) {
        throw error;
    }
};

const getAllDebtors = async () => {
    try {
        const debtors = await Debtor.find();

        return debtors;
    } catch (error) {
        throw error;
    }
};


const getDebtorById = async (debtorId) => {
    try {
        const debtor = await Debtor.findById(debtorId);
        return debtor;
    } catch (error) {
        throw error;
    }
};

const getDebtorByCode = async (debtorCode) => {
    try {
        const debtor = await Debtor.findOne({ debtorCode });
        return debtor;
    } catch (error) {
        throw error;
    }
};

const updateDebtor = async (debtorId, debtorData) => {
    try {
        debtorData.updated_at = Date.now()

        const debtor = await Debtor.findByIdAndUpdate(
            debtorId,
            debtorData,
            {
                new: true
            },
        );
        return debtor;
    } catch (error) {
        throw error;
    }
};

const deleteDebtor = async (debtorId) => {
    try {
        const debtor = await Debtor.findByIdAndUpdate(
            debtorId,
            {
                updated_at: Date.now(),
                deleted_at: Date.now(),
            },
            {
                new: true,
            }
        );
        return debtor;
    } catch (error) {
        throw error;
    }
};

module.exports = {
    createDebtor,
    getDebtorById,
    getDebtorByCode,
    getAllDebtors,
    updateDebtor,
    deleteDebtor,
};