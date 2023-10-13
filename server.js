const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');


const app = express();
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://janaritta.com');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
app.use(bodyParser.json());

let userList = [
    { id: 'John Doe', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id: 'Jane Smith', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id: 'Michael Johnson', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id: 'Emily Davis', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id:  'Robert Brown', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id:  'Sarah Taylor', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id:  'Daniel Anderson', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id:  'Jennifer Clark', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id:  'Brian Davis', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id:  'Lisa Johnson', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id:  'Paul Williams', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id:  'Mary Martin', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id:  'David Wilson', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id:  'Susan Garcia', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id:  'Matthew Thompson', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id:  'Nancy Harris', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id:  'Kevin Jackson', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id:  'Laura Martinez', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id:  'Andrew Anderson', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id:  'Jessica Miller', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id:  'Thomas Taylor', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id:  'Karen Davis', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id:  'James Thomas', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id:  'Linda Johnson', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id:  'William White', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id:  'Maria Harris', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id:  'Steven Taylor', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id:  'Kimberly Martinez', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id:  'Joseph Smith', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id:  'Michelle Davis', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id:  'Richard Jones', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id:  'Patricia Clark', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id:  'Charles Davis', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id:  'Sandra Wilson', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id:  'Daniel Harris', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id:  'Jessica Martin', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id:  'Christopher Thomas', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id:  'Ashley Harris', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id:  'Paul Clark', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id:  'Amy Robinson', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id:  'Mark Walker', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id:  'Donna Hall', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id:  'Joshua Baker', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id:  'Jennifer Miller', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id:  'Jason Garcia', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id:  'Laura Davis', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id:  'Brian Thompson', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id:  'Kimberly Robinson', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id:  'William Lewis', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id:  'Patricia Hernandez', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id:  'Ryan Lee', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id:  'Laura Smith', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id:  'Jeffrey Allen', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id:  'Margaret Nelson', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id:  'Scott Martinez', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id:  'Karen Young', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id:  'Timothy Thomas', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id:  'Helen Rodriguez', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id:  'Larry Harris', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id:  'Tiffany Johnson', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id:  'Frank Martinez', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id:  'Sharon Taylor', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id:  'Jason Anderson', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id:  'Deborah Clark', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id:  'Gary Thomas', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id:  'Angela Wilson', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id:  'Edward Martinez', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id:  'Cynthia Clark', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id:  'Brian Johnson', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id:  'Angela Taylor', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id:  'Anthony Hall', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id:  'Brenda Walker', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id:  'Kevin Brown', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id:  'Christine Harris', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id:  'Paul Lee', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id:  'Deborah Garcia', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id:  'Donald Martin', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id:  'Michelle Robinson', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id:  'Kenneth Johnson', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id:  'Janet Davis', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id:  'Edward Harris', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id:  'Kathleen Smith', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id:  'James Smith', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id:  'Betty Clark', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id:  'Daniel Thompson', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id:  'Sara Walker', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id:  'George Martin', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id:  'Diane Harris', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id:  'Henry Davis', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id:  'Shirley Robinson', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id:  'Patrick Miller', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id:  'Teresa Taylor', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id:  'Andrew Allen', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id:  'Tina Johnson', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id:  'Gary Robinson', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id:  'Marilyn Davis', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id:  'Keith Hall', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id:  'Laura Martin', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id:  'Christopher Thompson', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id:  'Lori Young', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id:  'Kenneth Clark', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id:  'Julie Walker', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id:  'Stephen Garcia', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id:  'Dorothy Davis', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id:  'Eric Taylor', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id:  'Sandra Smith', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id:  'Jerry Martin', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id:  'Gloria Johnson', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id:  'Carl Hernandez', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id:  'Martha Harris', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id:  'Nicholas Clark', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id:  'Evelyn Martin', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id:  'Bryan Anderson', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id:  'Phyllis Thompson', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id:  'Gerald Davis', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id:  'Sharon Smith', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id:  'Jeremy Miller', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id:  'Shirley Harris', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id:  'Todd Baker', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id:  'Denise Jackson', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id:  'Roger Young', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id:  'Kathy Robinson', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id:  'Lawrence Taylor', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id:  'Alice Davis', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id:  'Kathryn Smith', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id:  'Robin Clark', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id:  'Roy Martin', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id:  'Lois Johnson', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id:  'Juan Davis', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id:  'Beverly Garcia', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id:  'Bruce Hall', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id:  'Ann Lee', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id:  'Albert Anderson', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id:  'Brenda Thompson', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id:  'Joe Clark', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id:  'Cheryl Harris', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id:  'Dennis Davis', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id:  'Jeanne Smith', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id:  'Randy Hernandez', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id:  'Janice Taylor', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id:  'Gerald Robinson', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id:  'Maria Harris', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id:  'Philip Taylor', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id:  'Catherine Davis', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id:  'Roger Brown', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id:  'Terry Garcia', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id:  'Rachel Johnson', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id:  'Aaron Clark', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id:  'Howard Martin', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id:  'Cynthia Smith', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id:   'Johnny Baker', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id:  'Mildred Walker', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id:  'Phillip Davis', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id:  'Julia Robinson', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id:  'Ralph Johnson', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id:  'Melissa Harris', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id:  'Bobby Taylor', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id:  'Louise Clark', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id:  'Bruce Hall', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id:  'Shawn Lewis', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id:  'Eugene Smith', votes: 0, isVotedBefore: 'N',canAttendMessage:'', },
    { id:  'Joan Baker', votes: 0, isVotedBefore: 'N',canAttendMessage:'', }
  ];



app.get('/userList', (req, res) => {
  res.json(userList); 

});

app.post('/isValidUser', (req, res) => {
  console.log("user search :", userList.find(({id})=>id==req.body.vote_from))
  var userSearch =userList.find(({id})=>id==req.body.vote_from);
  res.json(userSearch != undefined?
  {message: 'valid user.', value:true,userObj:userSearch}
  :
  {message: 'Invalid user or voted ID.', value:false, userObj:{id:  '-1', votes: -1, isVotedBefore: '-1'}}
  );
});

app.post('/resetUsers', (req, res) => {

  userList =[...userList.map(({id})=>({id, votes: 0, isVotedBefore: 'N',canAttendMessage:'', }))];
  res.json({message: 'users reseted successfully', value:true,userObj:userList});
});

app.post('/vote', (req, res) => {
  const userId = req.body.vote_from;
  const votedId = req.body.vote_to;
  const canAttendMessage = req.body.canAttendMessage;
console.log("reqbody : ",req.body);

  const user = userList.find(item => item.id === userId);
  const votedUser = userList.find(item => item.id === votedId);

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

    res.json({ message: 'Vote recorded successfully.',messageAr:'تمت عملية التصويت بنجاح', value:true });
  
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
