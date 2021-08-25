const { model, Schema, Schema: { Types: { ObjectId } } } = require('mongoose');

const schema = new Schema({
    title: {
        type: String,
        default: '',
    },
    images: {
        type: Array,
        default: [],
    },
    specifications: {
        type: Array,
        default: [],
    },
    comment: {
        type: String,
        default: '',
    },
    category: {
        type: ObjectId,
        ref: 'Category',
    },
});

module.exports = model('Product', schema);