// require necessary models
const { Thought, User } = require('../models');



// GET a single user by its _id and populated thought and friend data
module.exports = {
  async getUsers(req, res) {
    try {

    } catch (err) {
      res.status(500).json(err);
    }
  },

  async getUserById(req, res) {
    try {

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

    } catch (err) {
      res.status(500).json(err);
    }
  },

  async updateUserById(req, res) {
    try {

    } catch (err) {
      res.status(500).json(err);
    }
  },

  // bonus, remove user's associated thoughts when deleted
  async deleteUserById(req, res) {
    try {

    } catch (err) {
      res.status(500).json(err);
    }
  },
}