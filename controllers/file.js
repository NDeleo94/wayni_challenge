const { messages } = require('../constants/messages');
const { status } = require('../constants/statusCodes');
const { apiResponse } = require('../helpers/apiResponse');
const EntityService = require('../services/entity');
const DebtorService = require('../services/debtor');
const {
    getDataDebtors,
    checkAndAddEntity,
    checkAndAddDebtor,
    checkLine
} = require('../helpers/debtorsFile');

const uploadFileDebtors = async (req, res) => {
    try {
        const fileContent = req.file.buffer.toString('utf8');
        const lines = fileContent.split('\n');
        const entities = []
        const debtors = []

        lines.forEach(line => {
            if (checkLine(line)) {
                const { entityCode, debtorCode, situation, sumLoans } = getDataDebtors(line)
                checkAndAddEntity(entities, entityCode, sumLoans)
                checkAndAddDebtor(debtors, debtorCode, sumLoans, situation)
            }
        })

        entities.forEach(async (entity) => {
            try {
                entity.sumLoans = parseFloat(entity.sumLoans.toFixed(2))
                const checkEntity = await EntityService.getEntityByCode(entity.entityCode)
                if (!checkEntity) {
                    await EntityService.createEntity(entity)
                } else {
                    await EntityService.updateEntity(checkEntity._id, entity)
                }
            } catch (error) {
                console.log(error)
            }
        })

        debtors.forEach(async (debtor) => {
            try {
                debtor.sumLoans = parseFloat(debtor.sumLoans.toFixed(2))
                const checkDebtor = await DebtorService.getDebtorByCode(debtor.debtorCode)
                if (!checkDebtor) {
                    await DebtorService.createDebtor(debtor)
                } else {
                    await DebtorService.updateDebtor(checkDebtor._id, debtor)
                }
            } catch (error) {
                console.log(error)
            }
        })

        const response = apiResponse(null, status.success, messages.success)

        return res.status(status.success).json(response);
    } catch (error) {
        const response = apiResponse(null, status.badRequest, messages.badRequest)

        return res.status(status.badRequest).json(response);
    }
};


module.exports = {
    uploadFileDebtors,
};