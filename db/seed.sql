\c flashcards_db

DELETE FROM flashcards;

INSERT INTO flashcards(question, answer, difficulty, category)
VALUES(
'What is HTML short for?',
'Hyper Text Markup Languuage',
1, 'HTML'), 
('What is ES6 short for?', 'Ecmascript 6', 1, 'Javascript')

