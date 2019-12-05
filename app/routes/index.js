// requir necessary NPM Pakages

const express = require('express');

// instantiate a router (mini app that only handles routes)
const router = express.Router();



/**
 * Action .......INDEX
 * Method .......Get
 * URI:   .......(/)
 * Description: Get the Root Route
 */

 router.get('/', (req, res)=>{
     res.json({ message: 'Welcome to Blogy' });
 });

//export the router so we can use it in the server.js file
module.exports = router;