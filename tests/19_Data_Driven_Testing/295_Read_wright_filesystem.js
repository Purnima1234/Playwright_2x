const fs= require('fs');

import path from 'path';

const filepath= path.join(__dirname,'./293-users.json');

const fileData= fs.readFileSync(filepath,'utf-8');

const userdata=JSON.parse(fileData);
console.log(userdata.username);

//writing data to a JSON file

const user={
    name: "Purnima",
    Role: "QA trainee"
};

const jsondata= JSON.stringify(user,null,2);
fs.writeFileSync("Output.json", jsondata );

console.log("Json file Created");

