const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://janaritta.com');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
app.use(bodyParser.json());

let userList = [
    { id: 'John Doe', votes: 0, isVotedBefore: 'N' },
    { id: 'Jane Smith', votes: 0, isVotedBefore: 'N' },
    { id: 'Michael Johnson', votes: 0, isVotedBefore: 'N' },
    { id: 'Emily Davis', votes: 0, isVotedBefore: 'N' },
    { id:  'Robert Brown', votes: 0, isVotedBefore: 'N' },
    { id:  'Sarah Taylor', votes: 0, isVotedBefore: 'N' },
    { id:  'Daniel Anderson', votes: 0, isVotedBefore: 'N' },
    { id:  'Jennifer Clark', votes: 0, isVotedBefore: 'N' },
    { id:  'Brian Davis', votes: 0, isVotedBefore: 'N' },
    { id:  'Lisa Johnson', votes: 0, isVotedBefore: 'N' },
    { id:  'Paul Williams', votes: 0, isVotedBefore: 'N' },
    { id:  'Mary Martin', votes: 0, isVotedBefore: 'N' },
    { id:  'David Wilson', votes: 0, isVotedBefore: 'N' },
    { id:  'Susan Garcia', votes: 0, isVotedBefore: 'N' },
    { id:  'Matthew Thompson', votes: 0, isVotedBefore: 'N' },
    { id:  'Nancy Harris', votes: 0, isVotedBefore: 'N' },
    { id:  'Kevin Jackson', votes: 0, isVotedBefore: 'N' },
    { id:  'Laura Martinez', votes: 0, isVotedBefore: 'N' },
    { id:  'Andrew Anderson', votes: 0, isVotedBefore: 'N' },
    { id:  'Jessica Miller', votes: 0, isVotedBefore: 'N' },
    { id:  'Thomas Taylor', votes: 0, isVotedBefore: 'N' },
    { id:  'Karen Davis', votes: 0, isVotedBefore: 'N' },
    { id:  'James Thomas', votes: 0, isVotedBefore: 'N' },
    { id:  'Linda Johnson', votes: 0, isVotedBefore: 'N' },
    { id:  'William White', votes: 0, isVotedBefore: 'N' },
    { id:  'Maria Harris', votes: 0, isVotedBefore: 'N' },
    { id:  'Steven Taylor', votes: 0, isVotedBefore: 'N' },
    { id:  'Kimberly Martinez', votes: 0, isVotedBefore: 'N' },
    { id:  'Joseph Smith', votes: 0, isVotedBefore: 'N' },
    { id:  'Michelle Davis', votes: 0, isVotedBefore: 'N' },
    { id:  'Richard Jones', votes: 0, isVotedBefore: 'N' },
    { id:  'Patricia Clark', votes: 0, isVotedBefore: 'N' },
    { id:  'Charles Davis', votes: 0, isVotedBefore: 'N' },
    { id:  'Sandra Wilson', votes: 0, isVotedBefore: 'N' },
    { id:  'Daniel Harris', votes: 0, isVotedBefore: 'N' },
    { id:  'Jessica Martin', votes: 0, isVotedBefore: 'N' },
    { id:  'Christopher Thomas', votes: 0, isVotedBefore: 'N' },
    { id:  'Ashley Harris', votes: 0, isVotedBefore: 'N' },
    { id:  'Paul Clark', votes: 0, isVotedBefore: 'N' },
    { id:  'Amy Robinson', votes: 0, isVotedBefore: 'N' },
    { id:  'Mark Walker', votes: 0, isVotedBefore: 'N' },
    { id:  'Donna Hall', votes: 0, isVotedBefore: 'N' },
    { id:  'Joshua Baker', votes: 0, isVotedBefore: 'N' },
    { id:  'Jennifer Miller', votes: 0, isVotedBefore: 'N' },
    { id:  'Jason Garcia', votes: 0, isVotedBefore: 'N' },
    { id:  'Laura Davis', votes: 0, isVotedBefore: 'N' },
    { id:  'Brian Thompson', votes: 0, isVotedBefore: 'N' },
    { id:  'Kimberly Robinson', votes: 0, isVotedBefore: 'N' },
    { id:  'William Lewis', votes: 0, isVotedBefore: 'N' },
    { id:  'Patricia Hernandez', votes: 0, isVotedBefore: 'N' },
    { id:  'Ryan Lee', votes: 0, isVotedBefore: 'N' },
    { id:  'Laura Smith', votes: 0, isVotedBefore: 'N' },
    { id:  'Jeffrey Allen', votes: 0, isVotedBefore: 'N' },
    { id:  'Margaret Nelson', votes: 0, isVotedBefore: 'N' },
    { id:  'Scott Martinez', votes: 0, isVotedBefore: 'N' },
    { id:  'Karen Young', votes: 0, isVotedBefore: 'N' },
    { id:  'Timothy Thomas', votes: 0, isVotedBefore: 'N' },
    { id:  'Helen Rodriguez', votes: 0, isVotedBefore: 'N' },
    { id:  'Larry Harris', votes: 0, isVotedBefore: 'N' },
    { id:  'Tiffany Johnson', votes: 0, isVotedBefore: 'N' },
    { id:  'Frank Martinez', votes: 0, isVotedBefore: 'N' },
    { id:  'Sharon Taylor', votes: 0, isVotedBefore: 'N' },
    { id:  'Jason Anderson', votes: 0, isVotedBefore: 'N' },
    { id:  'Deborah Clark', votes: 0, isVotedBefore: 'N' },
    { id:  'Gary Thomas', votes: 0, isVotedBefore: 'N' },
    { id:  'Angela Wilson', votes: 0, isVotedBefore: 'N' },
    { id:  'Edward Martinez', votes: 0, isVotedBefore: 'N' },
    { id:  'Cynthia Clark', votes: 0, isVotedBefore: 'N' },
    { id:  'Brian Johnson', votes: 0, isVotedBefore: 'N' },
    { id:  'Angela Taylor', votes: 0, isVotedBefore: 'N' },
    { id:  'Anthony Hall', votes: 0, isVotedBefore: 'N' },
    { id:  'Brenda Walker', votes: 0, isVotedBefore: 'N' },
    { id:  'Kevin Brown', votes: 0, isVotedBefore: 'N' },
    { id:  'Christine Harris', votes: 0, isVotedBefore: 'N' },
    { id:  'Paul Lee', votes: 0, isVotedBefore: 'N' },
    { id:  'Deborah Garcia', votes: 0, isVotedBefore: 'N' },
    { id:  'Donald Martin', votes: 0, isVotedBefore: 'N' },
    { id:  'Michelle Robinson', votes: 0, isVotedBefore: 'N' },
    { id:  'Kenneth Johnson', votes: 0, isVotedBefore: 'N' },
    { id:  'Janet Davis', votes: 0, isVotedBefore: 'N' },
    { id:  'Edward Harris', votes: 0, isVotedBefore: 'N' },
    { id:  'Kathleen Smith', votes: 0, isVotedBefore: 'N' },
    { id:  'James Smith', votes: 0, isVotedBefore: 'N' },
    { id:  'Betty Clark', votes: 0, isVotedBefore: 'N' },
    { id:  'Daniel Thompson', votes: 0, isVotedBefore: 'N' },
    { id:  'Sara Walker', votes: 0, isVotedBefore: 'N' },
    { id:  'George Martin', votes: 0, isVotedBefore: 'N' },
    { id:  'Diane Harris', votes: 0, isVotedBefore: 'N' },
    { id:  'Henry Davis', votes: 0, isVotedBefore: 'N' },
    { id:  'Shirley Robinson', votes: 0, isVotedBefore: 'N' },
    { id:  'Patrick Miller', votes: 0, isVotedBefore: 'N' },
    { id:  'Teresa Taylor', votes: 0, isVotedBefore: 'N' },
    { id:  'Andrew Allen', votes: 0, isVotedBefore: 'N' },
    { id:  'Tina Johnson', votes: 0, isVotedBefore: 'N' },
    { id:  'Gary Robinson', votes: 0, isVotedBefore: 'N' },
    { id:  'Marilyn Davis', votes: 0, isVotedBefore: 'N' },
    { id:  'Keith Hall', votes: 0, isVotedBefore: 'N' },
    { id:  'Laura Martin', votes: 0, isVotedBefore: 'N' },
    { id:  'Christopher Thompson', votes: 0, isVotedBefore: 'N' },
    { id:  'Lori Young', votes: 0, isVotedBefore: 'N' },
    { id:  'Kenneth Clark', votes: 0, isVotedBefore: 'N' },
    { id:  'Julie Walker', votes: 0, isVotedBefore: 'N' },
    { id:  'Stephen Garcia', votes: 0, isVotedBefore: 'N' },
    { id:  'Dorothy Davis', votes: 0, isVotedBefore: 'N' },
    { id:  'Eric Taylor', votes: 0, isVotedBefore: 'N' },
    { id:  'Sandra Smith', votes: 0, isVotedBefore: 'N' },
    { id:  'Jerry Martin', votes: 0, isVotedBefore: 'N' },
    { id:  'Gloria Johnson', votes: 0, isVotedBefore: 'N' },
    { id:  'Carl Hernandez', votes: 0, isVotedBefore: 'N' },
    { id:  'Martha Harris', votes: 0, isVotedBefore: 'N' },
    { id:  'Nicholas Clark', votes: 0, isVotedBefore: 'N' },
    { id:  'Evelyn Martin', votes: 0, isVotedBefore: 'N' },
    { id:  'Bryan Anderson', votes: 0, isVotedBefore: 'N' },
    { id:  'Phyllis Thompson', votes: 0, isVotedBefore: 'N' },
    { id:  'Gerald Davis', votes: 0, isVotedBefore: 'N' },
    { id:  'Sharon Smith', votes: 0, isVotedBefore: 'N' },
    { id:  'Jeremy Miller', votes: 0, isVotedBefore: 'N' },
    { id:  'Shirley Harris', votes: 0, isVotedBefore: 'N' },
    { id:  'Todd Baker', votes: 0, isVotedBefore: 'N' },
    { id:  'Denise Jackson', votes: 0, isVotedBefore: 'N' },
    { id:  'Roger Young', votes: 0, isVotedBefore: 'N' },
    { id:  'Kathy Robinson', votes: 0, isVotedBefore: 'N' },
    { id:  'Lawrence Taylor', votes: 0, isVotedBefore: 'N' },
    { id:  'Alice Davis', votes: 0, isVotedBefore: 'N' },
    { id:  'Kathryn Smith', votes: 0, isVotedBefore: 'N' },
    { id:  'Robin Clark', votes: 0, isVotedBefore: 'N' },
    { id:  'Roy Martin', votes: 0, isVotedBefore: 'N' },
    { id:  'Lois Johnson', votes: 0, isVotedBefore: 'N' },
    { id:  'Juan Davis', votes: 0, isVotedBefore: 'N' },
    { id:  'Beverly Garcia', votes: 0, isVotedBefore: 'N' },
    { id:  'Bruce Hall', votes: 0, isVotedBefore: 'N' },
    { id:  'Ann Lee', votes: 0, isVotedBefore: 'N' },
    { id:  'Albert Anderson', votes: 0, isVotedBefore: 'N' },
    { id:  'Brenda Thompson', votes: 0, isVotedBefore: 'N' },
    { id:  'Joe Clark', votes: 0, isVotedBefore: 'N' },
    { id:  'Cheryl Harris', votes: 0, isVotedBefore: 'N' },
    { id:  'Dennis Davis', votes: 0, isVotedBefore: 'N' },
    { id:  'Jeanne Smith', votes: 0, isVotedBefore: 'N' },
    { id:  'Randy Hernandez', votes: 0, isVotedBefore: 'N' },
    { id:  'Janice Taylor', votes: 0, isVotedBefore: 'N' },
    { id:  'Gerald Robinson', votes: 0, isVotedBefore: 'N' },
    { id:  'Maria Harris', votes: 0, isVotedBefore: 'N' },
    { id:  'Philip Taylor', votes: 0, isVotedBefore: 'N' },
    { id:  'Catherine Davis', votes: 0, isVotedBefore: 'N' },
    { id:  'Roger Brown', votes: 0, isVotedBefore: 'N' },
    { id:  'Terry Garcia', votes: 0, isVotedBefore: 'N' },
    { id:  'Rachel Johnson', votes: 0, isVotedBefore: 'N' },
    { id:  'Aaron Clark', votes: 0, isVotedBefore: 'N' },
    { id:  'Howard Martin', votes: 0, isVotedBefore: 'N' },
    { id:  'Cynthia Smith', votes: 0, isVotedBefore: 'N' },
    { id:   'Johnny Baker', votes: 0, isVotedBefore: 'N' },
    { id:  'Mildred Walker', votes: 0, isVotedBefore: 'N' },
    { id:  'Phillip Davis', votes: 0, isVotedBefore: 'N' },
    { id:  'Julia Robinson', votes: 0, isVotedBefore: 'N' },
    { id:  'Ralph Johnson', votes: 0, isVotedBefore: 'N' },
    { id:  'Melissa Harris', votes: 0, isVotedBefore: 'N' },
    { id:  'Bobby Taylor', votes: 0, isVotedBefore: 'N' },
    { id:  'Louise Clark', votes: 0, isVotedBefore: 'N' },
    { id:  'Bruce Hall', votes: 0, isVotedBefore: 'N' },
    { id:  'Shawn Lewis', votes: 0, isVotedBefore: 'N' },
    { id:  'Eugene Smith', votes: 0, isVotedBefore: 'N' },
    { id:  'Joan Baker', votes: 0, isVotedBefore: 'N' }
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

app.post('/vote', (req, res) => {
  const userId = req.body.vote_from;
  const votedId = req.body.vote_to;
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

    votedUser.votes++;
    user.isVotedBefore = 'Y';

    res.json({ message: 'Vote recorded successfully.',messageAr:'تمت عملية التصويت بنجاح', value:true });
  
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
