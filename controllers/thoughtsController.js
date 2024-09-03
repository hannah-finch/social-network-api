// require necessary models
const { Thought, User } = require('../models');

  // example data
/*
{
  "thoughtText": "Here's a cool thought...",
  "username": "lernantino",
  "userId": "5edff358a0fcb779aa7b118b"
}
*/

module.exports = {
  async getThoughts(req, res) {
    try {
      const thoughts = await Thought.find();
      res.json(thoughts);
    } catch (err) {
      res.status(500).json(err);
    }
  },

// create a thought
  async createThought(req, res) {
    try {
      const thought = await Thought.create(req.body);

      // push the created thought's _id to the associated user's thoughts array field
      const user = await User.findOneAndUpdate(
        { _id: req.body.userId }, 
        { $addToSet: { thoughts: thought._id }},
        { runValidators: true, new: true }
      )
      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // get a thought by id
  async getSingleThought(req, res) {
    try {
      const thought = await Thought.findOne({ _id: req.params.thoughtId})
        .select('-__v')
      
        if (!thought) {
          return res.status(404).json({ message: 'No thought with that ID' })
        };

        res.json({
          thought
        });
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // update a thought
  async updateThoughtById(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $set: req.body },
        { runValidators: true, new: true }
      );

      if (!thought) {
        res.status(404).json({ message: 'No thought with this id' });
      }

      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // delete a thought
  async deleteThoughtById(req, res) {
    try {
      const thought = await Thought.findOneAndDelete({ _id: req.params.thoughtId });

      if (!thought) {
        res.status(404).json( { message: 'No thought with that ID' })
      }

      res.json({ message: `Thought deleted` })
    } catch (err) {
      res.status(500).json(err);
    }
  },
}
