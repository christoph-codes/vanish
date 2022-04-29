const conversations = [
  {
    id: 1,
    users: [1, 2],
    name: 'The Boys',
    messages: [
      {
        sender: 1,
        message: 'How is it going bro',
        receiver: 2,
      },
      {
        sender: 2,
        message: 'Good man, Chillin! 👌',
        receiver: 2,
      },
    ],
  },
  {
    id: 2,
    users: [2, 3],
    name: 'The Girls',
    messages: [
      {
        sender: 2,
        message: 'Whats up',
        receiver: 1,
      },
      {
        sender: 1,
        message: 'Living life',
        receiver: 3,
      },
    ],
  },
];
export default conversations;
