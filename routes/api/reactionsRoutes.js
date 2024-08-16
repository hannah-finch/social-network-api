const router = require('express').Router();
const { createReaction, removeReaction } = require('../../controllers/reactionsController')

router.route('/').post(createReaction)
router.route('/:id').delete(removeReaction)

module.exports = router;