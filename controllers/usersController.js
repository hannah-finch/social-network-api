const { Thought, User } = require('../models');

/*
EXAMPLE USER DATA
{
  "username": "lernantino",
  "email": "lernantino@gmail.com"
}
*/

module.exports = {
  // get all users
  async getUsers(req, res) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // get a single user by their ID
  async getUserById(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userId})
        .select('-__v')
        // populate user's thoughts and friends
        .populate('thoughts')
        .populate('friends');
      
        if (!user) {
          return res.status(404).json({ message: 'No user with that ID' })
        };

        res.json({
          user
        });
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // create a new user from the request body
  async createUser(req, res) {
    try {
      const user = await User.create(req.body);
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // update a user by id
  async updateUserById(req, res) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $set: req.body },
        { runValidators: true, new: true }
      );

      if (!user) {
        res.status(404).json({ message: 'No user with this id' });
      }

      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // delete a user and their associated thoughts
  async deleteUserById(req, res) {
    try {
      const user = await User.findOneAndDelete({ _id: req.params.userId });

      if (!user) {
        res.status(404).json( { message: 'No user with that ID' })
      }

      // remove user's associated thoughts when deleted
      await Thought.deleteMany({ _id: { $in: user.thoughts }});
      res.json({ message: `User and user's thoughts deleted` })
    } catch (err) {
      res.status(500).json(err);
    }
  },
}