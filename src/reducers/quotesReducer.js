// reducers/quoteReducer.js
import { EDIT_QUOTE, SAVE_QUOTE, FILL_STOCK, ADD_QUOTE } from "../actions/types";

const initialState = {
  quotes: [],
  savedQuotes: [],
};

const quoteReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_QUOTE:
      const savedQuote = action.payload;
      return {
        ...state,
        savedQuotes: [...state.savedQuotes, savedQuote],
      };
    case FILL_STOCK:
      const quotes = action.payload;
      return {
        ...state,
        quotes: [...quotes],
      };
    case EDIT_QUOTE:
      const { quoteId, propertyToEdit, newValue } = action.payload;
      return {
        ...state,
        quotes: state.quotes.map((quote) =>
          quote.id === quoteId ? { ...quote, [propertyToEdit]: newValue } : quote
        ),
      };
    case ADD_QUOTE:
      const newQuote = action.payload;
      return {
        ...state,
        quotes: [newQuote, ...state.quotes],
      };
    default:
      return state;
  }
};

export default quoteReducer;
