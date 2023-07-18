import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import style from './QuoteCard.module.scss';
import { saveQuote } from "../actions/quoteAction";
import { removeQuote } from "../actions/quoteAction";
import Button from "./Button"

function QuoteCard ({ quote }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function addQuoteToSaved() {
    dispatch(saveQuote(quote))
  }

  function navigateToQuotePage() {
    navigate('/quotepage/' + quote.id)
  }

  return (
    <article className={style.quoteCard}>
      <h3>{quote.quote}</h3>
      <Button title="See More" action={navigateToQuotePage}/>
    </article>
  );
};

export default QuoteCard;
