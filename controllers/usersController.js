// require necessary models
const { Thought, User } = require('../models');


module.exports = {
  async getUsers(req, res) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  //TODO this works to get a user, but I'm not sure if the populate works. Check back after adding some thoughts and friends
  async getUserById(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userId})
        .select('-__v')
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

//    example data
// {
//   "username": "lernantino",
//   "email": "lernantino@gmail.com"
// }
  async createUser(req, res) {
    try {
      const user = await User.create(req.body);
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

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

  // bonus, remove user's associated thoughts when deleted
  //TODO come back and check if this works to delete thoughts with the user
  async deleteUserById(req, res) {
    try {
      const user = await User.findOneAndDelete({ _id: req.params.userId });

      if (!user) {
        res.status(404).json( { message: 'No user with that ID' })
      }

      await Thought.deleteMany({ _id: { $in: user.thoughts }});
      res.json({ message: `User and user's thoughts deleted` })
    } catch (err) {
      res.status(500).json(err);
    }
  },
}