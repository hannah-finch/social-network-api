// require necessary models
const { Thought, User } = require('../models');

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