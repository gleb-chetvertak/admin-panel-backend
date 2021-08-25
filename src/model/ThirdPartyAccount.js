const { model, Schema, Schema: { Types: { ObjectId } } } = require('mongoose');

const schema = new Schema({
    title: {
        type: String,
        default: '',
    },
    username: {
        type: String,
        default: '',
    },
    link: {
        type: String,
        default: '',
    },
    comment: {
        type: String,
        default: '',
    },
});

module.exports = model('ThirdPartyAccount', schema);