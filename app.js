//The requirements for the project
const express = require ("express");
const {projects} = require("./data.json");
const app =express();


app.set('view engine','pug');
//the files stored in the folder 'public' will be considered static files
app.use('/static',express.static('public'));

//the home page route
app.get('/',(req,res)=>{
    res.render("index",{projects});
})

//the about page route
app.get("/about",(req,res)=>{
    res.render("about");
})
//the project page route
app.get("/project/:id",(req,res)=>{
    const id  = req.params.id;
    //a new project page will be displayed for each project
    const project = projects[id];
    res.render("project",{project});
})
//error handle for non found pages
app.use((req,res,next)=>{
    const error = new Error('Page not found');
    error.status = 404;
    next(error);
})
//global error handler
app.use((err,req,res,next)=>{
    if (err.status== 404){
        err.message = 'Error occured , page not found.'
        res.render('page-not-found',{err});
    }
    else{
        err.message = 'Error , return to main page '
        err.status=500;
        res.render('error',{err});
    }
   
})

app.listen(3000, () => {
    console.log('The application is running on localhost:3000!')
});