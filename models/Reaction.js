const { Schema } = require('mongoose');

const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxLength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    // TODO Use a getter method to format the timestamp on query
    createdAt: {
      type: Date,
      default: Date.now
    }, 
  }
);


module.exports = reactionSchema;