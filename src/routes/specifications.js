const router = require('express-promise-router')();
const { specification } = require('../controllers');

router.route('/').get(specification.getAll);

router.route('/:id').get(specification.get);

router.route('/').post(specification.create);

router.route('/:id').put(specification.update);

router.route('/:id').delete(specification.delete);

module.exports = router;