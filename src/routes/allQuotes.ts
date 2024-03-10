import {
    Request,
    Response
} from 'express';

import quotes from '../utils/quotes';

function randomQuote(req: Request, res: Response) {
    return res.status(200).send(quotes);
}

export default randomQuote;