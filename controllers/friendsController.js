// require necessary models
const { User } = require('../models');

// add a friend with the userId and friendId as parameters in the url
/* EXAMPLE: 
localhost:3001/api/users/ { userId } /friends/ { friendId }
*/

module.exports = {
  async addFriend(req, res) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $addToSet: { friends: req.params.friendId }},
        { runValidators: true, new: true }
      );
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async removeFriend(req, res) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $pull: { friends: req.params.friendId } },
        { runValidators: true, new: true }
      )
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
}