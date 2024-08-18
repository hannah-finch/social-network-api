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
  //TODO GET a single user by its _id and populated thought and friend data
// rn this works to get a user, but I need to bring in thought and friend data. Remember the thing in class where info can show here, and not in get all.
  async getUserById(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userId})
        .select('-__v');
      
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
  //TODO
  async updateUserById(req, res) {
    try {

    } catch (err) {
      res.status(500).json(err);
    }
  },

  // bonus, remove user's associated thoughts when deleted
  //TODO
  async deleteUserById(req, res) {
    try {

    } catch (err) {
      res.status(500).json(err);
    }
  },
}