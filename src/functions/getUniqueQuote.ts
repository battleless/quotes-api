import Quote from "../utils/types";

import quotes from "../utils/quotes";

function getUniqueQuote(inputQuotes: Quote[]): Quote {
    const quote = quotes[Math.floor(Math.random() * quotes.length)];

    const inQuotes = inputQuotes.some(q => {
        return q.author === quote.author
        && q.quote === quote.quote
    });

    if (inQuotes) {
        return getUniqueQuote(inputQuotes);
    }

    return quote;
}

export default getUniqueQuote;