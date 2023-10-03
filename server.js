const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

let userList = [
  { id: 1, votes: 0, isVotedBefore: 'N' },
  { id: 2, votes: 0, isVotedBefore: 'N' },
  { id: 3, votes: 0, isVotedBefore: 'N' },
  { id: 4, votes: 0, isVotedBefore: 'N' },
  { id: 5, votes: 0, isVotedBefore: 'N' },
  { id: 6, votes: 0, isVotedBefore: 'N' },
  { id: 7, votes: 0, isVotedBefore: 'N' },
  { id: 8, votes: 0, isVotedBefore: 'N' },
  { id: 9, votes: 0, isVotedBefore: 'N' },
  { id: 10, votes: 0, isVotedBefore: 'N' },
  { id: 11, votes: 0, isVotedBefore: 'N' },
  { id: 12, votes: 0, isVotedBefore: 'N' },
  { id: 13, votes: 0, isVotedBefore: 'N' },
  { id: 14, votes: 0, isVotedBefore: 'N' },
  { id: 15, votes: 0, isVotedBefore: 'N' },
  { id: 16, votes: 0, isVotedBefore: 'N' },
  { id: 17, votes: 0, isVotedBefore: 'N' },
  { id: 18, votes: 0, isVotedBefore: 'N' },
  { id: 19, votes: 0, isVotedBefore: 'N' },
  { id: 20, votes: 0, isVotedBefore: 'N' },
  { id: 21, votes: 0, isVotedBefore: 'N' },
  { id: 22, votes: 0, isVotedBefore: 'N' },
  { id: 23, votes: 0, isVotedBefore: 'N' },
  { id: 24, votes: 0, isVotedBefore: 'N' },
  { id: 25, votes: 0, isVotedBefore: 'N' },
  { id: 26, votes: 0, isVotedBefore: 'N' },
  { id: 27, votes: 0, isVotedBefore: 'N' },
  { id: 28, votes: 0, isVotedBefore: 'N' },
];

app.get('/userList', (req, res) => {
  res.json(userList);
});

app.post('/vote/:userId/:votedId', (req, res) => {
  const userId = parseInt(req.params.userId);
  const votedId = parseInt(req.params.votedId);

  const user = userList.find(item => item.id === userId);
  const votedUser = userList.find(item => item.id === votedId);

  if (!user || !votedUser) {
    return res.status(400).json({ message: 'Invalid user or voted ID.' });
  }

  if (user == votedUser) {
    return res.status(400).json({ message: 'user cannot vote for him/her self.' });
  }

  if (user.isVotedBefore === 'N') {
    votedUser.votes++;
    user.isVotedBefore = 'Y';

    res.json({ message: 'Vote recorded successfully.' });
  } else {
    res.status(400).json({ message: 'User has already voted.' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
