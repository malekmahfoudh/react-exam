// // pages/QuotePage.js
// import React from "react";
// import { useSelector } from "react-redux";
// import { useParams } from "react-router-dom";
// import QuoteDetails from "../components/QuoteDetails";

// const QuotePage = () => {
//   const { id } = useParams();
//   const quotes = useSelector((state) => state.quotes);
//   const quote = quotes.find((quote) => quote.id === Number(id));

//   if (!quote) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h2>Quote Details</h2>
//       <QuoteDetails quote={quote} />
//     </div>
//   );
// };

// export default QuotePage;

import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { editQuote, saveQuote} from '../actions/quoteAction';
import { Link } from "react-router-dom";
import style from "./QuotePage.module.scss"

function QuoteDetails() {
  const [quote, setQuote] = useState();
  const [editedQuote, setEditedQuote] = useState();
  const params = useParams();
  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return state;
  });

  useEffect(() => {
    let quoteMatch = state.quotes.find((quote) => quote.id == params.id);
    setQuote(quoteMatch);
    setEditedQuote(quoteMatch.quote)
  }, [state]);

  function addQuoteToSaved() {
    dispatch(editQuote(quote))
  };

  return (
    <main>
      {quote &&
        <>
          <img className={style.quote__img} src={'/images/MS.avif'}></img>
          <h2>{quote.quote}</h2>
          <h3>{quote.author}</h3>
          <h4>{quote.episode}</h4>
          <section>
            {quote && <Link to ={`/edit/${quote.id}`}>
              <button>Edit</button>
            </Link>}
          </section>
          
        </>
      }
    </main>
  )

}


export default QuoteDetails;
