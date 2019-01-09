const db = require('../config/connection');

const Flashcard = {};

Flashcard.findAll = () => {
	return db.query('SELECT * FROM flashcards')
}

Flashcard.findById = id => {
	 return db.one(`SELECT * FROM flashcards
    WHERE id = $1`, id);
}

Flashcard.create = flashcard => { //creates flashcard
  return db.one(
    `INSERT INTO flashcards(question, answer, difficulty, category)
    VALUES ($1, $2, $3, $4)
    RETURNING *`,
    [flashcard.question, flashcard.answer, flashcard.difficulty, flashcard.category])
}

Flashcard.update = (flashcard, id) => { //updates flashcard
  return db.one(`
    UPDATE flashcards
    SET question = $1,
    answer = $2,
    difficulty = $3,
    category = $4
    WHERE id = $5
    RETURNING *`,
    [flashcard.question, flashcard.answer, flashcard.difficulty, flashcard.category, id] //lets you put without having to enter id
    )
}

Flashcard.destroy = id => { //deletes flashcard
  return db.none(
    `DELETE FROM flashcards
    WHERE id = $1`, id)
}

module.exports = Flashcard; //exports object and functions