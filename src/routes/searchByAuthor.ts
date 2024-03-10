import {
    Request,
    Response
} from 'express';

import quotes from '../utils/quotes';

function searchByAuthor(req: Request, res: Response) {
    const query = req.query.query?.toString();
    const limit = req.query.limit ? parseInt(req.query.limit as string) : 10;

    if (!query) {
        return res.status(400).send({
            message: 'Query parameter is required!'
        });
    }

    const quotesByAuthor = quotes
        .filter(quote => quote.author.toLowerCase().includes(query.toLowerCase()))
        .slice(0, limit); 

    return res.status(200).send(quotesByAuthor);
}

export default searchByAuthor;