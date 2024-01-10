const convertToIntOrFloat = (myString, int = true) => {
    const stringReplaced = myString.replace(",", ".");
    if (int) {
        return parseInt(stringReplaced);
    } else {
        return parseFloat(stringReplaced);
    }
};

const getDataDebtors = (contentFile) => {
    const entityCode = convertToIntOrFloat(contentFile.substring(0, 5));
    const dateInfo = convertToIntOrFloat(contentFile.substring(5, 11));
    const typeId = convertToIntOrFloat(contentFile.substring(11, 13));
    const debtorCode = convertToIntOrFloat(contentFile.substring(13, 24));
    const activity = convertToIntOrFloat(contentFile.substring(24, 27));
    const situation = convertToIntOrFloat(contentFile.substring(27, 29));
    const sumLoans = convertToIntOrFloat(contentFile.substring(29, 41), false);
    return {
        entityCode,
        dateInfo,
        typeId,
        debtorCode,
        activity,
        situation,
        sumLoans,
    };
};

const findIndexByEntityCode = (entities, value) => {
    for (let i = 0; i < entities.length; i++) {
        if (entities[i].entityCode === value) {
            return i;
        }
    }
    return -1;
}

const findIndexByDebtorCode = (debtors, value) => {
    for (let i = 0; i < debtors.length; i++) {
        if (debtors[i].debtorCode === value) {
            return i;
        }
    }
    return -1;
}

const checkAndAddEntity = (entities, entityCode, sumLoans) => {
    const indexEntity = findIndexByEntityCode(entities, entityCode)
    if (indexEntity === -1) {
        entities.push({ entityCode: entityCode, sumLoans: sumLoans })
    } else {
        entities[indexEntity].sumLoans += sumLoans
    }
}

const checkAndAddDebtor = (debtors, debtorCode, sumLoans, situation) => {
    const indexDebtor = findIndexByDebtorCode(debtors, debtorCode)
    if (indexDebtor === -1) {
        debtors.push({ debtorCode: debtorCode, sumLoans: sumLoans, situation: situation })
    } else {
        debtors[indexDebtor].sumLoans += sumLoans
        if (debtors[indexDebtor].situation < situation) {
            debtors[indexDebtor].situation = situation
        }
    }
}

const checkLine = (line) => {
    if (line.length !== 171) {
        return false
    }
    return true
}

module.exports = {
    getDataDebtors,
    checkAndAddEntity,
    checkAndAddDebtor,
    checkLine,
};
