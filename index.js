const express= require('express');
const app = express();
const port= 8000;

// use express router
app.use('/',require('./routes'));

app.set('view engine','ejs');
app.set('views','./views');


app.listen(port,function(err){
    if(err){
        console.log(`oops ! there is something wrong:${err}`);
    }
    
    console.log(`Weehuu !! Server is running on port${port}`);
});