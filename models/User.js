const { Schema, model } = require('mongoose');
const { isEmail } = require('validator')

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    email : {
      type: String,
      required: true,
      unique: true,
      validate: [ isEmail, 'invalid email' ]
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'thought',
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'user',
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  },
);

// returns the number of friends in the user's friends array
userSchema.virtual('friendCount').get( function () {
  return this.friends.length
})

const User = model('user', userSchema);

module.exports = User;