const router = require('express-promise-router')();
const { thirdPartyAccount } = require('../controllers');

router.route('/').get(thirdPartyAccount.getAll);

router.route('/:id').get(thirdPartyAccount.get);

router.route('/').post(thirdPartyAccount.create);

router.route('/:id').put(thirdPartyAccount.update);

router.route('/:id').delete(thirdPartyAccount.delete);

module.exports = router;