const router = require('express').Router();
const { getUsers, getUserById, createUser } = require('../../controllers/usersController')

router.route('/').get(getUsers).post(createUser)
router.route('/:id').get(getUserById)

module.exports = router;