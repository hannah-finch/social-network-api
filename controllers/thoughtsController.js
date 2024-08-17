// require necessary models
const { Thought, User } = require('../models');

module.exports = {
  async getThoughts(req, res) {
    try {

    } catch (err) {
      res.status(500).json(err);
    }
  },

  // example data
// {
//   "thoughtText": "Here's a cool thought...",
//   "username": "lernantino",
//   "userId": "5edff358a0fcb779aa7b118b"
// }

//  (don't forget to push the created thought's _id to the associated user's thoughts array field)
  async createThought(req, res) {
    try {

    } catch (err) {
      res.status(500).json(err);
    }
  },

  async getSingleThought(req, res) {
    try {

    } catch (err) {
      res.status(500).json(err);
    }
  },

  async updateThoughtById(req, res) {
    try {

    } catch (err) {
      res.status(500).json(err);
    }
  },

  async deleteThoughtById(req, res) {
    try {

    } catch (err) {
      res.status(500).json(err);
    }
  },
}
