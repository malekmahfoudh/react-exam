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

export const editQuote = (quote, newValue) => ({
    type: "EDIT_QUOTE",
    payload: {
        quote,
        newValue,
    },
});

export const addQuote = (newQuote) => ({
    type: "ADD_QUOTE",
    payload: newQuote,
});