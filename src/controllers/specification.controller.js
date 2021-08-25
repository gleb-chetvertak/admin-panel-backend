const genericCrud = require('./generic.controller');
const { Specification } = require('../model');

module.exports = {
    ...genericCrud(Specification),
}