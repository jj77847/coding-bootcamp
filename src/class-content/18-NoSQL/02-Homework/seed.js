const users = [
  {
    username: 'bobsmith',
    email: 'bobsmith@email.com',
  },
  {
    username: 'bobsmith',
    email: 'bobsmith@email.com',
  },
  {
    username: 'bobsmith',
    email: 'bobsmith@email.com',
  },
  {
    username: 'bobsmith',
    email: 'bobsmith@email.com',
  },
  {
    username: 'bobsmith',
    email: 'bobsmith@email.com',
  },
];

const thoughts = [
  {
    thoughtText: 'NoSQL is super easy',
    username: 'bobsmith',
    reactions: [
      {
        reactionId: '123',
        reactionBody: 'Yes I agree with you!!',
        username: 'janesmith',
      },
      {
        reactionId: '456',
        reactionBody: 'Yup agree',
        username: 'tomsmith',
      },
      {
        reactionId: '789',
        reactionBody: 'I am struggling with NoSQL',
        username: 'jacksmith',
      },
    ],
  },
];

// Step 1 seed all users

// Step 2 seed all thoughts

// Step 3 get all users from DB

// Step 4 map through the thoughts and link each thought the specific user (get the username of the thought and find the user object in users from DB and get _id of that user)
// once you get _id of user, insert the thought _id in to the thoughts array of the user
