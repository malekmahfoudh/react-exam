import { quoteStore } from "../store/quoteStore";

const quoteReducer = (state = quoteStore, action) => {
  let saved = [...state.saved];
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
    case "REMOVE_QUOTE":
      let quoteToRemove = action.payload;
      let index = saved.findIndex(
        (savedItem) => savedItem.id === quoteToRemove.id
      );

      return {
        ...state,
        saved: [...saved],
      };

    case "FILL_STOCK":
      return {
        ...state,
        quotes: [...action.payload],
      };

    case "EDIT_QUOTE":
      let editedQuote = action.payload.quote;
      let property = action.payload.property;
      editedQuote[property] = action.payload.newValue;
      let indexOfQuoteToEdit = saved.findIndex(
        (item) => item.id === editedQuote.id
      );
      saved.splice(indexOfQuoteToEdit, 1, editedQuote);
      return {
        ...state,
        saved: saved,
      };

    default:
      return state;
  }
};

export default quoteReducer;
