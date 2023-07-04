import { combineReducers } from "redux";
import quoteReducer from "./reducers/quoteReducer";

const rootReducer = combineReducers({
  quote: quoteReducer,
  // Lägg till andra reducer-funktioner om det behövs
});

export default rootReducer;
