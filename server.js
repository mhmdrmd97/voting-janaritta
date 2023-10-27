
const express = require('express');
const bodyParser = require('body-parser');
const { GoogleSpreadsheet } = require('google-spreadsheet');

const app = express();
app.use(express.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'https://janaritta.com');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });
  app.use(bodyParser.json());
  

const RESPONSES_SHEET_ID = '16KspswpqekCoYxDzdyyD2R_NQf7CW1lOm9_N5B725HE';
const CREDENTIALS = {
    type: "service_account",
    project_id: "votingappja",
    private_key_id: "8adbf3b315292558e9293ec98b17080a3864a4d7",
    private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDXmJD5nMCVuOc0\nRxRQSKJ7NWS1t7bg09O0BWNkpo/F14gEOq+4G4M+4WTx6E4PGXSGC6G/yicw2Wr+\nxoXzbS+E2BbR2vkEAV5E/Ipqa9fLtfuzoKc0Wt5DKprwBrRDrojdpcE+KZ2KwzRb\nEG7WLLHHlUIK7z3ge4QeXLeIGftRepwYJovrP9C34Lm6BGwCGy1k4/7dOSHl1W19\nqJH3odm5eGcTV0rdanWIRSA1uiSocujg7yTwtiuEtZHoPB+20Xs3MBUV8do4+M05\nCuWK27fbqSt059KmA3Qeu2FLGiLpil/cX/NTyubyhwGr5HCCvSGF9ak7Vnxj9bxM\nhyJDyZcPAgMBAAECggEAC6uPAWv6QsCBB2PnlhbwcKHpwypgJFhjB8YY5LxdYPSz\nQKNamqkmmBNETxHnk8qpc44SodqT94F1WLgvTQd2gIbf6VkkjJJ0Y2CWL3+J7VV6\n+/SwyFU43cLjIyYBwP4kG3da9/3xsK6zWVCQ51gBAZAzRHtByrJ06t3S83OQlo7m\nifYopBycHayet+NGK0dh7i9mZdSaS94S9wHYdjJo4zBRpanXWKPhzgN2Mvv2ncLB\n8HXvxS4HSNmkosOZ4LqTxggspFQE1pTPOEhCBQSsqb1njtmVrrG+iCaFm5rSjn8c\nEs/MGwAu1nleQTY4UAYUd59Ul3DSz6JsXO+a/LuM5QKBgQD1WMWfUHY8hpC9seKq\nrhUbol5yYK9hHBaV+/4G8CMXEh2xbYSP7eSDQDK1hvhdZHUgr3bJX/zjZByHQhqH\n6ubOUdvikY7no97XaWVJUuMquJJr1k7E7mETxvNnfBQq2BdEn+RRoKlSQLu8HdHl\nZtKeLe8z4Z3fskZsP+hAK/5NDQKBgQDg9RcOt+xhnyDVWgB71Lk8ecsJRs/1gXJu\nypngJJ9WCmJDMp1v0JWumYZ58vnOW4aW7Qgy7csJWpYet5PjwsqP/IiA2bVPad1k\nrwfWy6O1xXOscRam3TycB5qHvsFm7KJeUWIzMid5TBCRdxcWguawZTWsiTX6XYZ3\n5Mnl7eaFiwKBgH0OY6UCAVJ2kL5wNoYjN5UfXR7V028fPw/yIxhsPKac0E/I8AHh\nE1InXfGTO3N3KhCf/19DswZA2B3Ffvp6rGzL4tWIthuyNnr8OOl3+1yiOdgHo5zT\nmN3Y0eaUoz73aFzNVzaYOtY3Mrn/RSa2E3MXHM8IGE2WdDjnFj3nbrbdAoGAEz4j\n2Mh22erovhdSz0TlC31HluWNyGxoQ33lJ706O/vrZ+Aeg4AOLb9IN4pHQBWoL6Ta\n/LBGm+g5yyrc5bC17xck/hChZ8egfopSW1dUC6p2OJv72g42rwofd9kjZhB72yGP\nCt4RbljJWggb23sbDJ+7taSPD3mMlRjnBFoTS/0CgYEAnvsSTNKSVpidOrM8+RlP\nA6eRjf2obbcPUfUBTK+mMhuSbx/qEi0N3gj3mmemG3Wd33uoNnDTHSkFY++5Gh6b\n+QZJJsT4dF9FN1dC7BGaiADEyeiiNzj5ujjsMkHXJ9xKYMONNd/8zXciHYDA5THw\nE/zCh20Vx5EHhTOLNG5yxOk=\n-----END PRIVATE KEY-----\n",
    client_email: "votingappja@votingappja.iam.gserviceaccount.com",
    client_id: "104411499801664977538",
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/votingappja%40votingappja.iam.gserviceaccount.com",
    universe_domain: "googleapis.com"
  };

// Initialize Google Sheets document
const doc = new GoogleSpreadsheet(RESPONSES_SHEET_ID);

async function authenticateGoogleSheets() {
  await doc.useServiceAccountAuth({
    client_email: CREDENTIALS.client_email,
    private_key: CREDENTIALS.private_key,
  });
  await doc.loadInfo();
}

// Get all rows
app.post('/getAllRows', async (req, res) => {
    await authenticateGoogleSheets();
  
    const sheet = doc.sheetsByIndex[0];
    const rows = await sheet.getRows();
  console.log("rows :", rows)
    // Extracting relevant row data
    const rowData = rows.map(row => {
      return {
        idName: row.idName,
        votes: row.votes,
        isVotedBefore: row.isVotedBefore,
        canAttendMessage: row.canAttendMessage,
      };
    });
  
    res.json(rowData);
  });

  
  const doesUserValid = async (idName) => {
 
    const sheet = doc.sheetsByIndex[0];
    const rows = await sheet.getRows();
  
   for (let index = 0; index < rows.length; index++) {
      const row = await rows[index];
      console.log("row"+index + ": "+ row.idName);
    console.log("idname: ",idName)
      if ((row.idName).toUpperCase() === (idName).toUpperCase()) {
        return {idName:row.idName,votes:row.votes,isVotedBefore:row.isVotedBefore,canAttendMessage:row.canAttendMessage};  // idName exists
    }

if (row.idName === idName) {   
    break;
}
}
  
    return false;  // idName does not exist
  };





//IsValidUser
app.post('/isValidUser',async (req, res) => {
    await authenticateGoogleSheets();
  
    const sheet = doc.sheetsByIndex[0];
    const rows = await sheet.getRows();
  console.log("rows :", rows);

  var userSearch = await doesUserValid(req.body.vote_from);
    console.log("user search :", userSearch)
    res.json( (userSearch != undefined || userSearch != false) ?
    {message: 'valid user.', value:true,userObj:userSearch}
    :
    {message: 'Invalid user or voted ID.', value:false, userObj:{idName:  '-1', votes: -1, isVotedBefore: '-1'}}
    );
  });
  
//Reset Users All
  app.post('/resetUsers',async (req, res) => {
    await authenticateGoogleSheets();
  
    const sheet = doc.sheetsByIndex[0];
    const rows = await sheet.getRows();
  console.log("rows :", rows);
  for (let i = 0; i < rows.length; i++) {
    const row = rows[i];
        if(row["votes"] != 0 || row["isVotedBefore"] == "N" || row["canAttendMessage"] != "Reason" ){
            row["votes"] = 0;
            row["isVotedBefore"] = "N";
            row["canAttendMessage"] = "Reason";
            
            console.log("row:",row);
            await row.save();
        }
  }
    res.json({message: 'users reseted successfully', value:true,userObj:rows});
  });


//helpers
const doesIdNameExist = async (idName) => {
   
    const sheet = doc.sheetsByIndex[0];
    const rows = await sheet.getRows();
  
   for (let index = 0; index < rows.length; index++) {
      const row = await rows[index];
      console.log("row"+index + ": "+ row.idName);
    console.log("idname: ",idName)
      if ((row.idName).toUpperCase() === (idName).toUpperCase()) {
        return true;  // idName exists
      }
      
if (row.idName === idName) {   
    break;
}
    }
  
    return false;  // idName does not exist
  };
const doesUserVotedBefore = async (idName) => {
 
    const sheet = doc.sheetsByIndex[0];
    const rows = await sheet.getRows();
  
   for (let index = 0; index < rows.length; index++) {
      const row = await rows[index];
      console.log("row"+index + ": "+ row.idName);
    console.log("idname: ",idName)
      if ((row.idName).toUpperCase() === (idName).toUpperCase()) {
        return row.isVotedBefore;  // idName exists
    }

if ((row.idName).toUpperCase() === (idName).toUpperCase()) {   
    break;
}
}
  
    return false;  // idName does not exist
  };


 //vote
 
app.post('/vote', async (req, res) => {
    const {vote_from, vote_to,canAttendMessage } = req.body;
    await authenticateGoogleSheets();
  
    const sheet = doc.sheetsByIndex[0];
    const rows = await sheet.getRows();
  
 
  console.log("reqbody : ",req.body);

  let userExist = await doesIdNameExist(vote_from);
  let votedUserExist = await doesIdNameExist(vote_to);
let isUserVotedBefore = await doesUserVotedBefore(vote_from);

console.log("userExist:"+(userExist?"Yes":"No")+"\nvotedUserExist: "+(votedUserExist?"Yes":"No"));
console.log("isUserVotedBefore:"+(isUserVotedBefore=="Y"?"Yes":"No"));

    if (!userExist || !votedUserExist) { //if user id or voted id is not correct
      return res.json({ message: 'Invalid user or voted ID.',messageAr:'عذرا,الرجاء ادخال اسم المشترك بشكل صحيح', value:false });
    }
  
    if ((vote_from).toUpperCase() == (vote_to).toUpperCase()) { //if user cannot vote for himself
      return res.json({ message: 'user cannot vote for him/her self.',messageAr:'عذرا,لا يمكنك التصويت لنفسك', value:false });
    }
  
  if(isUserVotedBefore == "Y"){ //if user already voted he cannot vote again
   return   res.json({ message: 'User has already voted.',messageAr: 'عذرا,لا يمكنك التصويت لانك قمت بالتصويت  من قبل', value:false });
  }
  if(canAttendMessage=="" || canAttendMessage==" " || canAttendMessage==null || canAttendMessage ==undefined ){
    return res.json({ message: 'Please answer the Question before Voting.',messageAr:'لو سمحت, اجب على السؤال قبل التصويت', value:false });
  }
  
  let first=false;
  let second = false;
  for (let i = 0; i < rows.length; i++) {
    const row = rows[i];
        if((row["idName"]).toUpperCase()==(vote_to).toUpperCase()){
            row["votes"] =+row["votes"] + 1 ;
            console.log("row vote:",row);
            await row.save();
            first=true;
        }else if((row["idName"]).toUpperCase()==(vote_from).toUpperCase()){
        row["isVotedBefore"] = "Y";
        row["canAttendMessage"] = canAttendMessage;
        row["votedTo"] = (vote_to).toUpperCase();
        console.log("row user:",row);
        await row.save();
        second=true;
        }
        if(first==true && second==true){
            break;
        }
    }

      res.json({ message: 'Vote recorded successfully.',messageAr:'تمت عملية التصويت بنجاح', value:true });
    
  }); 



// Update a row
app.post('/api/updateRow', async (req, res) => {
try{

    const { idName, votes, isVotedBefore,canAttendMessage } = req.body;
    await authenticateGoogleSheets();

  const sheet = doc.sheetsByIndex[0];
  const rows = await sheet.getRows();

  for (let i = 0; i < rows.length; i++) {
    const row = rows[i];
        if(row["idName"]==idName){
            row["votes"] = votes;
            row["isVotedBefore"] = isVotedBefore;
            row["canAttendMessage"] = canAttendMessage;
        }
        console.log("row:",row);
        await row.save();
        
    }
    return res.json({ message: 'Row updated successfully' });
}
 catch(err){
    console.log("error at update:",err);
     res.status(404).json({ message: 'Row not found' });
 }   
});

// Delete a row
app.post('/api/deleteRow', async (req, res) => {
  const { keyValue, thisValue } = req.body;
  await authenticateGoogleSheets();

  const sheet = doc.sheetsByIndex[0];
  const rows = await sheet.getRows();

  for (let i = 0; i < rows.length; i++) {
    const row = rows[i];
    if (row[keyValue] === thisValue) {
      await row.delete();
      return res.json({ message: 'Row deleted successfully' });
    }
  }

  res.status(404).json({ message: 'Row not found' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
