// require necessary models
const { Thought } = require('../models');

/*
EXAMPLE DATA: CREATE a reaction
{
  "reactionBody": "Some words that are in reaction",
  "username": "test 2"
}

EXAMPLE DATA: DELETE a reaction with it's reactionID in the req.body JSON
{
  "reactionId": "66c3fed120d66ac661a2f3c4"
}
*/

module.exports = {
  // create a reaction by updating the thought's reactions array
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

  // remove a reaction
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

