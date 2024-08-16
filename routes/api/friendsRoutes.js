const router = require('express').Router();
const { addFriend, removeFriend } = require('../../controllers/friendsController')

router.route('/').post(addFriend)
router.route('/:id').delete(removeFriend)

module.exports = router;