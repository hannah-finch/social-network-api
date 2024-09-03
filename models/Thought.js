const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');
const formatDate = require('../utils/formatDate');

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      maxLength: 120,
      minLength: 1,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: formatDate
    },
    //the user that created this thought
    username: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      getters: true,
      virtuals: true,
    },
    id: false,
  }
);

thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length
})

const Thought = model('thought', thoughtSchema);

module.exports = Thought;