const Flashcard = require('../models/Flashcard');//imports flashcard model
const flashcardsController = {};//makes controller object

flashcardsController.index = (req, res) => {
  Flashcard.findAll() //finds all of the data
    .then(flashcards => {
      res.status(200).render('flashcards/flashcards-index', {flashcards:flashcards}); //renders flashcards
    })
    .catch(err => { //catches error
      console.log(err);
      res.status(500).json({error:err});
    })
}

flashcardsController.show = (req,res) => {
  Flashcard.findById(req.params.id) //shows flashcard by id
  .then(flashcard => {
    res.json({flashcard:flashcard});
    res.status(200).render('flashcards/flashcards-show', {flashcard:flashcard});
  })
  .catch(err => {//returns error
    console.log(err);
    res.status(500).json({error:err});
  })
}

flashcardsController.create = (req, res) => {//creates flashcard
  Flashcard.create({
    question: req.body.question,
    answer: req.body.answer,
    category: req.body.category,
    difficulty: req.body.difficulty
  })
  .then(flashcard => {
    res.redirect(`flashcards/${flashcard.id}`);
  })
  .catch(err => {//returns error
    console.log(err);
    res.status(500).json({error:err});
  })
}

flashcardsController.edit = (req, res) => {//edits flashcard
  Flashcard.findById(req.params.id) //finds card by id
  .then(flashcard => {
    res.status(200).render('flashcards/flashcard-edit', {flashcard:flashcard});
  })
.catch(err => { //returns error
  console.log(err);
  res.status(500).json({error:err});
})
}

flashcardsController.update = (req, res) => { //updates flashcard
  req.body.id = req.params.id; //lets you put without having to enter id
  Flashcard.update({
    question: req.body.question,
    answer: req.body.answer,
    category: req.body.category,
    difficulty: req.body.difficulty
  }, req.params.id)
  .then(flashcard => {
    res.redirect(`/flashcards/${flashcard.id}`);
  })
  .catch(err => { // catches error and returns it
    console.log(err);
    res.status(500).json({error:err});
  })
}

flashcardsController.delete = (req, res) => { //deletes flashcard
  Flashcard.destroy(req.params.id)
  .then(() => {
    res.redirect('/flashcards');
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({error:err});
  })
}

module.exports = flashcardsController