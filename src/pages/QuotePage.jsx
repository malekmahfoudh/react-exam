// pages/QuotePage.js
import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import QuoteDetails from "../components/QuoteDetails";

const QuotePage = () => {
  const { id } = useParams();
  const quotes = useSelector((state) => state.quotes);
  const quote = quotes.find((quote) => quote.id === Number(id));

  if (!quote) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Quote Details</h2>
      <QuoteDetails quote={quote} />
    </div>
  );
};

export default QuotePage;
