const express = require ("express");
const {projects} = require("./data.json");

const app =express();

app.set('view engine','pug');
app.use('/static',express.static('public'));

app.get('/',(req,res)=>{
    res.render("index",{projects});
})

app.listen(3000, () => {
    console.log('The application is running on localhost:3000!')
});