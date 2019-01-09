const express = require('express'); //imports express
const flashcardsRouter = express.Router(); //makes router
const flashcardsController = require('../controllers/flashcards-controller');//imports flashcards controller file

flashcardsRouter.get('/', flashcardsController.index); //gets all

flashcardsRouter.get('/new', (req, res) => { //gets one
  res.render('flashcards/flashcards-new');
})

flashcardsRouter.post('/', flashcardsController.create); //creates flashcard
flashcardsRouter.get('/:id', flashcardsController.show); //shows flashcard
flashcardsRouter.get('/:id/edit', flashcardsController.edit); //edits flashcard
flashcardsRouter.put('/:id', flashcardsController.update); //updates flashcard
flashcardsRouter.delete('/:id', flashcardsController.delete);//deletes flashcard

module.exports = flashcardsRouter;