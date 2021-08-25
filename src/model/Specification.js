const { model, Schema, Schema: { Types: { ObjectId } } } = require('mongoose');

const schema = new Schema({
    name: {
        type: String,
        default: '',
    },
    unit: {
        type: String,
        default: '',
    },
    comment: {
        type: String,
        default: '',
    },
});

module.exports = model('Specification', schema);