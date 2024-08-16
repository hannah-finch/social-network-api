const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');

// idk what this is atm
const cwd = process.cwd();

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`running on http://localhost:${PORT}`);
  });
});



// NOTES:

// Things that need to happen:
// FRIENDS:
//    POST Add friend
//    DELETE Remove friend
// USERS:
//    GET Find all users
//    GET Find user by id
//    POST Create user
//    POST Create second user (?)
//    POST Create third user (?)
// REACTIONS:
//    POST Create reaction
//    DELETE Remove friend
// THOUGHTS:
//    GET Get all thoughts
//    POST Create thought



// INFO NEEDED

// THOUGHTS:
//    _id
//    thoughtText
//    username
//    createdAt
//    reactions []
//    _v
//    reactionCount

// USERS:
//    thoughts [array of id's]
//    friends [array of id's]
//    _id
//    username
//    email
//    friendCount



// ACCEPTANCE CRITERIA:

// WHEN I enter the command to invoke the application
// THEN my server is started and the Mongoose models are synced to the MongoDB database

// WHEN I open API GET routes in Insomnia for users and thoughts
// THEN the data for each of these routes is displayed in a formatted JSON

// WHEN I test API POST, PUT, and DELETE routes in Insomnia
// THEN I am able to successfully create, update, and delete users and thoughts in my database

// WHEN I test API POST and DELETE routes in Insomnia
// THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list