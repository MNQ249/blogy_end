// Require necessary `NPM Package

const express = require('express');
const mongoose = require('mongoose');


// instantiate Express Application Object
const app = express();

//defind port for api to run on

const port = process.env.PORT || 5000; //comes from nodejs if exist run else run locally

// start the serever to listen for requests on a give port
app.listen(port, ()=>{
    console.log(`blogy is listening on port ${port}`);
});


