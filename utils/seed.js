const connection = require("../config/connection");
const { User, Thought } = require("../models");
const {
  getRandomUsername,
  getRandomThought,
  getRandomEmail,
  getRandomFriends,
} = require("./data");

connection.on("error", (err) => err);

connection.once("open", async () => {
  console.log("connected");
  await Thought.deleteMany({});
  await User.deleteMany({});

  const users = [];
  //   const thoughts = getRandomThought(10);
  const userthoughts = getRandomThought(3);
  const userfriends = getRandomFriends(3);

  for (let i = 0; i < 20; i++) {
    const username = getRandomUsername();

    const email = getRandomEmail();

    users.push({
      username,
      email,
      thoughts: [...userthoughts],
      friends: [...userfriends],
    });
  }

  await User.collection.insertMany(users);

  //   await Thought.collection.insertMany(thoughts);

  // loop through the saved Thoughts, for each Thought we need to generate a Thought response and insert the Thought responses
  console.table(users);
  console.table(userthoughts);
  console.info("Seeding complete! 🌱");
  process.exit(0);
});
