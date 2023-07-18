import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import style from './QuoteCard.module.scss';
import { saveQuote } from "../actions/quoteAction";
import { Link } from "react-router-dom"
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
      <section>
      {quote && <Link to={`/delete/${quote.id}`}><Button title="Delete"/></Link>}
      </section>
    </article>
  );
};

export default QuoteCard;
