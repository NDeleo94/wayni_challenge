const { messages } = require('../constants/messages');
const { status } = require('../constants/statusCodes');
const { apiResponse } = require('../helpers/apiResponse');
const EntityService = require('../services/entity');
const DebtorService = require('../services/debtor');
const { getDataDebtors } = require('../helpers/debtorsFile');

const uploadFileDebtors = async (req, res) => {
    try {
        const fileContent = req.file.buffer.toString('utf8');
        const lines = fileContent.split('\n');
        const hola = lines.slice(0, 10)
        hola.forEach(line => {
            const { codeEntity, dateInfo, typeId, codeDebtor, activity, situation, sumLoans } = getDataDebtors(line)
            console.log(codeEntity)
            console.log(dateInfo)
            console.log(typeId)
            console.log(codeDebtor)
            console.log(activity)
            console.log(situation)
            console.log(sumLoans)
        })
        //const sectionA = await SectionTypeAService.createSection(sectionData);

        const response = apiResponse(null, status.created, messages.created)

        return res.status(status.created).json(response);
    } catch (error) {
        const response = apiResponse(null, status.badRequest, messages.badRequest)

        return res.status(status.badRequest).json(response);
    }
};


module.exports = {
    uploadFileDebtors,
};