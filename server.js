const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const axios = require('axios');

const owner = 'mhmdrmd97';  // Replace with your GitHub username
const repo = 'voting-janaritta';  // Replace with your GitHub repository name
const filePath = 'userListBackup.txt';  // Replace with the path to your text file in the repo
const token = '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';

async function updateFile() {
  try {
    // Get the current file content
    const response = await axios.get(`https://api.github.com/repos/${owner}/${repo}/contents/${filePath}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    const { sha, content } = response.data;

    // Update the content
    const updatedContent = `${JSON.stringify([...userList], null, 2)}`;

    // Encode the updated content to base64
    const encodedContent = Buffer.from(updatedContent).toString('base64');

    // Update the file
    await axios.put(`https://api.github.com/repos/${owner}/${repo}/contents/${filePath}`, {
      message: 'Update file content',
      content: encodedContent,
      sha,
    }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    console.log('File updated successfully.');
  } catch (error) {
    console.error('Error updating file:', error.message);
  }
}










const app = express();
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://janaritta.com');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
app.use(bodyParser.json());

let userList = [
    { idName: 'John Doe', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName: 'Jane Smith', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName: 'Michael Johnson', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName: 'Emily Davis', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName:  'Robert Brown', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName:  'Sarah Taylor', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName:  'Daniel Anderson', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName:  'Jennifer Clark', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName:  'Brian Davis', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName:  'Lisa Johnson', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName:  'Paul Williams', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName:  'Mary Martin', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName:  'DavidName Wilson', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName:  'Susan Garcia', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName:  'Matthew Thompson', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName:  'Nancy Harris', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName:  'Kevin Jackson', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName:  'Laura Martinez', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName:  'Andrew Anderson', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName:  'Jessica Miller', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName:  'Thomas Taylor', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName:  'Karen Davis', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName:  'James Thomas', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName:  'Linda Johnson', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName:  'William White', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName:  'Maria Harris', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName:  'Steven Taylor', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName:  'Kimberly Martinez', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName:  'Joseph Smith', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName:  'Michelle Davis', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName:  'Richard Jones', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName:  'Patricia Clark', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName:  'Charles Davis', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName:  'Sandra Wilson', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName:  'Daniel Harris', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName:  'Jessica Martin', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName:  'Christopher Thomas', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName:  'Ashley Harris', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName:  'Paul Clark', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName:  'Amy Robinson', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName:  'Mark Walker', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName:  'Donna Hall', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName:  'Joshua Baker', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName:  'Jennifer Miller', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName:  'Jason Garcia', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName:  'Laura Davis', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName:  'Brian Thompson', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName:  'Kimberly Robinson', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName:  'William Lewis', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName:  'Patricia Hernandez', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName:  'Ryan Lee', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName:  'Laura Smith', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName:  'Jeffrey Allen', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName:  'Margaret Nelson', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName:  'Scott Martinez', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName:  'Karen Young', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName:  'Timothy Thomas', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName:  'Helen Rodriguez', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName:  'Larry Harris', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName:  'Tiffany Johnson', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName:  'Frank Martinez', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName:  'Sharon Taylor', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName:  'Jason Anderson', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName:  'Deborah Clark', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName:  'Gary Thomas', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName:  'Angela Wilson', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName:  'Edward Martinez', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName:  'Cynthia Clark', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName:  'Brian Johnson', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName:  'Angela Taylor', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName:  'Anthony Hall', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName:  'Brenda Walker', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName:  'Kevin Brown', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName:  'Christine Harris', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName:  'Paul Lee', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName:  'Deborah Garcia', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName:  'Donald Martin', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName:  'Michelle Robinson', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName:  'Kenneth Johnson', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName:  'Janet Davis', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName:  'Edward Harris', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName:  'Kathleen Smith', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName:  'James Smith', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName:  'Betty Clark', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName:  'Daniel Thompson', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName:  'Sara Walker', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName:  'George Martin', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName:  'Diane Harris', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName:  'Henry Davis', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName:  'Shirley Robinson', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName:  'Patrick Miller', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName:  'Teresa Taylor', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName:  'Andrew Allen', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName:  'Tina Johnson', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName:  'Gary Robinson', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName:  'Marilyn Davis', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName:  'Keith Hall', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName:  'Laura Martin', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName:  'Christopher Thompson', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName:  'Lori Young', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName:  'Kenneth Clark', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName:  'Julie Walker', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName:  'Stephen Garcia', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName:  'Dorothy Davis', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName:  'Eric Taylor', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName:  'Sandra Smith', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName:  'Jerry Martin', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName:  'Gloria Johnson', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName:  'Carl Hernandez', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName:  'Martha Harris', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName:  'Nicholas Clark', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName:  'Evelyn Martin', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName:  'Bryan Anderson', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName:  'Phyllis Thompson', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName:  'Gerald Davis', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName:  'Sharon Smith', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName:  'Jeremy Miller', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName:  'Shirley Harris', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName:  'Todd Baker', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName:  'Denise Jackson', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName:  'Roger Young', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName:  'Kathy Robinson', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName:  'Lawrence Taylor', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName:  'Alice Davis', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName:  'Kathryn Smith', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName:  'Robin Clark', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName:  'Roy Martin', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName:  'Lois Johnson', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName:  'Juan Davis', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName:  'Beverly Garcia', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName:  'Bruce Hall', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName:  'Ann Lee', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName:  'Albert Anderson', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName:  'Brenda Thompson', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName:  'Joe Clark', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName:  'Cheryl Harris', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName:  'Dennis Davis', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName:  'Jeanne Smith', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName:  'Randy Hernandez', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName:  'Janice Taylor', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName:  'Gerald Robinson', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName:  'Maria Harris', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName:  'Philip Taylor', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName:  'Catherine Davis', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName:  'Roger Brown', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName:  'Terry Garcia', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName:  'Rachel Johnson', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName:  'Aaron Clark', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName:  'Howard Martin', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName:  'Cynthia Smith', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName:   'Johnny Baker', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName:  'Mildred Walker', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName:  'Phillip Davis', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName:  'Julia Robinson', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName:  'Ralph Johnson', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName:  'Melissa Harris', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName:  'Bobby Taylor', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName:  'Louise Clark', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName:  'Bruce Hall', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName:  'Shawn Lewis', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName:  'Eugene Smith', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { idName:  'Joan Baker', votes: 0, isVotedBefore: 'N',canAttendMessage:'', }
  ];



app.get('/userList', (req, res) => {
  res.json(userList); 
updateFile();

});

app.post('/isValidUser', (req, res) => {
  console.log("user search :", userList.find(({idName})=>idName==req.body.vote_from))
  var userSearch =userList.find(({idName})=>idName==req.body.vote_from);
  res.json(userSearch != undefined?
  {message: 'valid user.', value:true,userObj:userSearch}
  :
  {message: 'Invalid user or voted ID.', value:false, userObj:{idName:  '-1', votes: -1, isVotedBefore: '-1'}}
  );
});

app.post('/resetUsers', (req, res) => {

  userList =[...userList.map(({idName})=>({idName, votes: 0, isVotedBefore: 'N',canAttendMessage:'', }))];
  res.json({message: 'users reseted successfully', value:true,userObj:userList});
});

app.post('/vote', (req, res) => {
  const userId = req.body.vote_from;
  const votedId = req.body.vote_to;
  const canAttendMessage = req.body.canAttendMessage;
console.log("reqbody : ",req.body);

  const user = userList.find(item => item.idName === userId);
  const votedUser = userList.find(item => item.idName === votedId);

  if (!user || !votedUser) { //if user id or voted id is not correct
    return res.json({ message: 'Invalid user or voted ID.',messageAr:'عذرا,الرجاء ادخال اسم المشترك بشكل صحيح', value:false });
  }

  if (user == votedUser) { //if user cannot vote for himself
    return res.json({ message: 'user cannot vote for him/her self.',messageAr:'عذرا,لا يمكنك التصويت لنفسك', value:false });
  }

if(user.isVotedBefore === 'Y'){ //if user already voted he cannot vote again
 return   res.json({ message: 'User has already voted.',messageAr: 'عذرا,لا يمكنك التصويت لانك قمت بالتصويت  من قبل', value:false });
}
if(canAttendMessage=="" || canAttendMessage==" " || canAttendMessage==null || canAttendMessage ==undefined ){
  return res.json({ message: 'Please answer the Question before Voting.',messageAr:'لو سمحت, اجب على السؤال قبل التصويت', value:false });
}


    votedUser.votes++;
    user.isVotedBefore = 'Y';
    user.canAttendMessage = canAttendMessage;
    
updateFile();


    res.json({ message: 'Vote recorded successfully.',messageAr:'تمت عملية التصويت بنجاح', value:true });
  
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
