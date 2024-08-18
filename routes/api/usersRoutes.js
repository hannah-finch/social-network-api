const router = require('express').Router();
// Users Controller
const {
  getUsers,
  getUserById,
  createUser,
  updateUserById,
  deleteUserById
} = require('../../controllers/usersController');
// Friends Controller
const {
  addFriend,
  removeFriend
} = require('../../controllers/friendsController');


router.route('/').get(getUsers).post(createUser);
router.route('/:userId').get(getUserById).put(updateUserById).delete(deleteUserById);

// for friendship
router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);

module.exports = router;