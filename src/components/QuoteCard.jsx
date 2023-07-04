// components/QuoteCard.js
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { saveQuote } from "../actions/quotesAction";

const QuoteCard = ({ quote }) => {
  const dispatch = useDispatch();

  const handleSaveQuote = () => {
    dispatch(saveQuote(quote));
  };

  return (
    <div>
      <h3>{quote.text}</h3>
      <Link to={`/quote/${quote.id}`}>See Details</Link>
      <button onClick={handleSaveQuote}>Save Quote</button>
    </div>
  );
};

export default QuoteCard;
