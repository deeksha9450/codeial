const express= require('express');
const app = express();
const port= 8000;

app.get('/',function(req,res){
    res.send("This is  a codeial project");
});

app.listen(port,function(err){
    if(err){
        console.log(`oops ! there is something wrong:${err}`);
    }
    console.log(`Weehuu !! Server is running on port:${port}`);
});