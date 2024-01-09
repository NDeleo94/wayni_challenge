const mongoose = require('mongoose');

const debtorSchema = mongoose.Schema({
    debtorCode: {
        type: Number,
        required: true,
        unique: true,
    },
    situation: {
        type: Number,
        required: true,
    },
    sumLoans: {
        type: Number,
        required: true,
    },
    created_at: {
        type: Date,
        default: Date.now()
    },
    updated_at: {
        type: Date,
        default: Date.now()
    },
    deleted_at: {
        type: Date,
        default: null
    },
}
)


module.exports = mongoose.model('Debtor', debtorSchema)