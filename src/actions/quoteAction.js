export const saveQuote = (quote) => ({
    type: "SAVE_QUOTE",
    payload: quote,
});

export const removeQuote = (quote) => ({
    type: "REMOVE_QUOTE",
    payload: quote,
});

export const fillStock = (quotes) => ({
    type: "FILL_STOCK",
    payload: quotes,
});

export const editQuote = (id, property, newValue) => ({
    type: "EDIT_QUOTE",
    payload: {
        id,
        property,
        newValue
    },
});

export const addQuote = (quote, author, episode) => ({
    type: "ADD_QUOTE",
    payload: {
        quote,
        author,
        episode
    },
});