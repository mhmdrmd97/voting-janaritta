const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
let totalUsers = 2000;

let userList = Array.from({ length: totalUsers }, (_, i) => ({ id: i + 1, votes: 0, isVotedBefore: 'N' }));
let backup = [];

backup.forEach((elem,index)=>{
userList[elem["id"] -1] = {...userList[elem["id"] -1], ...elem}
});

app.get('/userList', (req, res) => {
  res.json(userList);
});

app.post('/vote/:userId/:votedId', (req, res) => {
  const userId = parseInt(req.params.userId);
  const votedId = parseInt(req.params.votedId);

  const user = userList.find(item => item.id === userId);
  const votedUser = userList.find(item => item.id === votedId);

  if (!user || !votedUser) { //if user id or voted id is not correct
    return res.status(400).json({ message: 'Invalid user or voted ID.' });
  }

  if (user == votedUser) { //if user cannot vote for himself
    return res.status(400).json({ message: 'user cannot vote for him/her self.' });
  }

if(user.isVotedBefore === 'Y'){ //if user already voted he cannot vote again
 return   res.status(400).json({ message: 'User has already voted.' });
}

    votedUser.votes++;
    user.isVotedBefore = 'Y';

    res.json({ message: 'Vote recorded successfully.' });
  
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
