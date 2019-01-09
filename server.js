const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const methodOverride = require('method-override');
const flashcardsRoutes = require('./routes/flashcard-routes');
const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(methodOverride('_method'));

app.get('/', (req, res) => {
	res.render('index');
})

app.use('/flashcards', flashcardsRoutes);

app.listen(PORT, () => {
	console.log('listening on port ${PORT}');
})

