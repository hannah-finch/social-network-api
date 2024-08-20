const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction')

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      maxLength: 120,
      minLength: 1,
    },
    // TODO Use a getter method to format the timestamp on query
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

function formatDate(timestamp) {
  return new Date(timestamp).toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"})
}

const Thought = model('thought', thoughtSchema);

module.exports = Thought;