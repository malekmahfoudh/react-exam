// pages/StartPage.js
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import QuoteCard from "../components/QuoteCard";
import { addQuote } from "../actions/quotesAction";


const StartPage = () => {
  const [newQuote, setNewQuote] = useState("");
  const quotes = useSelector((state) => state.quotes);
  const dispatch = useDispatch();

  const handleAddQuote = () => {
    if (newQuote.trim() !== "") {
      const quote = {
        id: Date.now(),
        text: newQuote,
      };
      dispatch(addQuote(quote));
      setNewQuote("");
    }
  };

  return (
    <div>
      <h2>Start Page</h2>
      <input
        type="text"
        value={newQuote}
        onChange={(e) => setNewQuote(e.target.value)}
        placeholder="Enter a new quote"
      />
      <button onClick={handleAddQuote}>Add Quote</button>
      {quotes.map((quote) => (
        <QuoteCard key={quote.id} quote={quote} />
      ))}
    </div>
  );
};

export default StartPage;
