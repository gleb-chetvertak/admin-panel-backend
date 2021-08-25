const genericCrud = require('./generic.controller');
const { ThirdPartyAccount } = require('../model');

module.exports = {
    ...genericCrud(ThirdPartyAccount),
}