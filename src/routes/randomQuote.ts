import {
    Request,
    Response
} from 'express';

import getUniqueQuote from '../functions/getUniqueQuote';

import Quote from '../utils/types';

import quotes from '../utils/quotes';

function randomQuote(req: Request, res: Response) {
    const limit = req.query.limit ? parseInt(req.query.limit as string) : 1

    if (limit > 25) {
        return res.status(404).json({
            message: 'Limit parameter is too large!'
        });
    }

    if (limit === 1) {
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

        return res.status(200).send(randomQuote);
    } else {
        const randomQuotes: Quote[] = [];

        for (let i = 0; limit > i; i++) {
            const randomQuote = getUniqueQuote(randomQuotes);

            randomQuotes.push(randomQuote);
        }

        return res.status(200).send(randomQuotes)
    }
}

export default randomQuote;