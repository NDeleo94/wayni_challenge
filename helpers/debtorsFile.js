const getDataDebtors = (contentFile) => {
    const codeEntity = contentFile.substring(0, 5)
    const dateInfo = contentFile.substring(5, 11)
    const typeId = contentFile.substring(11, 13)
    const codeDebtor = contentFile.substring(13, 24)
    const activity = contentFile.substring(24, 27)
    const situation = contentFile.substring(27, 29)
    const sumLoans = contentFile.substring(29, 41)
    return { codeEntity, dateInfo, typeId, codeDebtor, activity, situation, sumLoans }
}

module.exports = { getDataDebtors }