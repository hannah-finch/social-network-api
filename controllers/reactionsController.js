// require necessary models
const { Thought, User, Reaction } = require('../models');

/*
Example reaction:
{
  "reactionBody": "Some words that are in reaction",
  "username": "test 2"
}
*/

module.exports = {
  async createReaction(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $addToSet: { reactions: req.body } },
        { runValidators: true, new: true }
      );
      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },

/*
Example delete reaction:
{
  "reactionId": "66c3fed120d66ac661a2f3c4"
}
*/  

  async removeReaction(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $pull: { reactions: { reactionId: req.body.reactionId } }},
        { runValidators: true, new: true }
      );
      res.status(200).json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
}

