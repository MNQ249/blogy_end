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

// router.get('/api/articles/id', (req,res)=>{
//     Article.findById().then((article)=>{

//         res.status(200).json({article:article});
//     })
//     .catch((error)=>{
//         res.status(404).json({error:error});
//     })
// });


router.get('/api/articles/:id', (req, res) => {
    Article.findById(req.params.id)
      .then((article) => {
        if(article) {
          
          return article;
        } else {
          // If we couldn't find a document with the matching ID
          res.status(404).json({
            error: {
              name: 'DocumentNotFoundError',
              message: 'The provided ID doesn\'t match any documents'
            }
          });
        }
      })
      .then(() => {
        // If the article succeeded, return 204 and no JSON
        res.status(204).end();
      })
      // Catch any errors that might occur
      .catch((error) => {
        res.status(500).json({ error: error });
      });
  });
  



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

router.patch('/api/articles/:id', (req, res) => {
    Article.findById(req.params.id)
      .then((article) => {
        if(article) {
          // Pass the result of Mongoose's `.update` method to the next `.then`
          return article.updateOne();
        } else {
          // If we couldn't find a document with the matching ID
          res.status(404).json({
            error: {
              name: 'DocumentNotFoundError',
              message: 'The provided ID doesn\'t match any documents'
            }
          });
        }
      })
      .then((article) => {
        // If the update succeeded, return 204 and no JSON
        res.status(201).json({article: article});
      })
      // Catch any errors that might occur
      .catch((error) => {
        res.status(500).json({ error: error });
      });
  });


/**
 * Action .......DESTROY
 * Method .......DELETE          
 * URI:   .......(/api/articles/id)
 * Description: Delete an Article by Article ID
 */

router.delete('/api/articles/:id', (req, res) => {
    Article.findById(req.params.id)
      .then((article) => {
        if(article) {
          // Pass the result of Mongoose's `.delete` method to the next `.then`
          return article.remove();
        } else {
          // If we couldn't find a document with the matching ID
          res.status(404).json({
            error: {
              name: 'DocumentNotFoundError',
              message: 'The provided ID doesn\'t match any documents'
            }
          });
        }
      })
      .then(() => {
        // If the deletion succeeded, return 204 and no JSON
        res.status(204).end();
      })
      // Catch any errors that might occur
      .catch((error) => {
        res.status(500).json({ error: error });
      });
  });


//export the router so we can use it in the server.js file
module.exports = router;