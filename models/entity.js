const mongoose = require('mongoose');

const entitySchema = mongoose.Schema({
    entityCode: {
        type: Number,
        required: true,
        unique: true,
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


module.exports = mongoose.model('Entity', entitySchema)