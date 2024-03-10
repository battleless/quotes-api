import express from 'express';

import allQuotes from './routes/allQuotes';
import randomQuote from './routes/randomQuote';
import searchByAuthor from './routes/searchByAuthor';
import searchByQuote from './routes/searchByQuote';

const app = express();

app.get('/all', (req, res) => allQuotes(req, res));
app.get('/random', (req, res) => randomQuote(req, res));
app.get('/search/author', (req, res) => searchByAuthor(req, res));
app.get('/search/quote', (req, res) => searchByQuote(req, res));

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});