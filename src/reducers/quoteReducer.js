import { quoteStore } from "../store/quoteStore";

const quoteReducer = (state = quoteStore, action) => {
  let saved = [...state.saved];
  let quotes = [...state.quotes];
  switch (action.type) {
    case "SAVE_QUOTE":
      let quoteToSave = action.payload;
      let objIndex = saved.findIndex(
        (savedItem) => savedItem.id === quoteToSave.id
      );
      // if(objIndex > -1) {
      //     saved[objIndex].amount += 1;
      // } else {
      //     quoteToSave.amount = 1
      //     saved.push(quoteToSave)
      // }
      return {
        ...state,
        saved: [...saved],
      };
    // case "ADD_QUOTE":
    //   return {
    //     ...state,
    //     quotes: [action.payload.newQuote, ...state.quote],
    //   };
    case "ADD_QUOTE":
    //   let quoteToAdd = action.payload;
    //   console.log("ADDED ITEM");
      return {
        ...state,
        quotes: [action.payload.newQuote, ...state.quotes],
      };

    case "REMOVE_QUOTE":
      let quoteToRemove = action.payload;
      let index = state.quotes.filter(
        (savedItem) => savedItem.id !== quoteToRemove.id
      );
      console.log(index, "Index här");
      console.log(quoteToRemove, "Quote här");

      // Här ska vi ta bort från quotes
      state.quotes.splice(index, 1);

      return {
        ...state,
        quotes: [...state.quotes],
      };

    case "FILL_STOCK":
      return {
        ...state,
        quotes: [...action.payload],
      };

    case "EDIT_QUOTE":
      let editedQuote = action.payload.editedQuote;
      let updatedQuote = action.payload.updatedQuote;
      let indexOfQuoteToEdit = state.quotes.findIndex(
        (item) => item.id === editedQuote.id
      );

      state.quotes[indexOfQuoteToEdit] = {
        ...state.quotes[indexOfQuoteToEdit],
        ...updatedQuote,
      };

      return {
        ...state,
        quotes: [...state.quotes],
      };

    default:
      return state;
  }
};

export default quoteReducer;
