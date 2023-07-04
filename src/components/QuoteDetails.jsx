// components/QuoteDetails.js
import React from "react";

const QuoteDetails = ({ quote }) => {
  return (
    <div>
      <h2>Quote Details</h2>
      <p>Text: {quote.text}</p>
      <p>Author: {quote.author}</p>
    </div>
  );
};

export default QuoteDetails;
