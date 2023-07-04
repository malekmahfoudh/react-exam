// quoteActions.js
export const saveQuote = (quote) => ({
    type: "SAVE_QUOTE",
    payload: quote,
  });
  
  export const fillStock = (quotes) => ({
    type: "FILL_STOCK",
    payload: quotes,
  });
  
  export const editQuote = (quoteId, propertyToEdit, newValue) => ({
    type: "EDIT_QUOTE",
    payload: {
      quoteId,
      propertyToEdit,
      newValue,
    },
  });
  
  export const addQuote = (newQuote) => ({
    type: "ADD_QUOTE",
    payload: newQuote,
  });
  