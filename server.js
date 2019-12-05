// Require necessary `NPM Package

const express = require('express');
const mongoose = require('mongoose');


// requir route files
const indexRouter = require('./app/routes/index');
const articlesRouter = require('./app/routes/articles');


// Require DB Configuration File
const db = require('./config/db');

// Establish database connection
mongoose.connect(db, {useNewUrlParser: true});
mongoose.connection.once('open', ()=>{
    console.log('Connected to MongoDB');
})


// instantiate Express Application Object
const app = express();


//defind port for api to run on

const port = process.env.PORT || 5000; //comes from nodejs if exist run else run locally

/** Routes ***/
app.use(indexRouter);
app.use(articlesRouter);

// start the serever to listen for requests on a give port
app.listen(port, ()=>{
    console.log(`blogy is listening on port ${port}`);
});


