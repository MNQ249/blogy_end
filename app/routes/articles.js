//Requir necessary NPM Packages 
const express = require('express');

// Require mongoose Model for article
const Article = require('../models/article')

// instantiate a router (mini app that only handles routes)
const router = express.Router();

/**
 * Action .......INDEX
 * Method .......Get
 * URI:   .......(/api/articles)
 * Description: Get all Articles
 */

router.get('/api/articles', (req, res)=>{
    Article.find().then((articles)=>{
        // return all articles as an array
        res.status(201).json({articles: articles});

    })
    //catch any errors that might occur
    .catch((error)=>{
        res.status(500).json({error: error});
    })
});

/**
 * Action .......SHOW
 * Method .......Get
 * URI:   .......(/api/articles/id)
 * Description: Get an Article by Article ID
 */



 /**
 * Action .......CREATE
 * Method .......POST
 * URI:   .......(/api/articles)
 * Description: Create a New Article
 */
router.post('/api/articles', (req, res)=>{
    Article.create(req.body.article)
    //on a successful `create` action respond with 201 
    //HTTP status and the content of the new article.
    .then((newArticle)=>{
        res.status(201).json({article:newArticle});

    })
    //catch any error that might occur
    .catch((error)=>{
        res.status(500).json({error:error});
    })
})


 /**
 * Action .......UPDATE
 * Method .......PATCH         ...Patch for mutiple id and put for one 
 * URI:   .......(/api/articles/id)
 * Description: Update an Article by Article ID
 */



/**
 * Action .......DESTROY
 * Method .......DELETE          
 * URI:   .......(/api/articles/id)
 * Description: Delete an Article by Article ID
 */
//export the router so we can use it in the server.js file
module.exports = router;