import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeQuote } from "../actions/quoteAction";

export default function RemoveQuote() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.quotes);

  const params = useParams();

  const [quote, setQuote] = useState();

  useEffect(() => {
    let currentQuote = state.find((q) => params.id === q.id);
    setQuote(currentQuote);
  }, [state, params.id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function handleDelete() {
    dispatch(removeQuote(params.id));
  }

  return (
    <article className="form-container remove">
      <h3>Are you sure you want to remove this quote?</h3>
      <section className="remove-quote">
        <p>{quote && quote.text}</p>
        <small>{quote && quote.author}</small>
      </section>
      <section className="btns-container">
        <Link to="/">
          <button onClick={() => handleDelete()}>Yes</button>
        </Link>
        <Link to="/">
          <button>No</button>
        </Link>
      </section>
    </article>
  );
}
