// store.js
import { createStore } from "redux";
import quotesReducer from "../reducers/quotesReducer";

const store = createStore(quotesReducer);

export default store;
