// pages/StartPage.js
import { useSelector } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { useEffect, useState } from 'react';
import style from './StartPage.module.scss';
import { Link } from 'react-router-dom';


function StartPage() {
  const [quotes, setQuotes] = useState([]);
  const [quotesFromStore, setQuotesFromStore] = useState([]);
  const state = useSelector((state) => {
    return state;
  });
  useEffect(() => {
    setQuotes(state.quotes);
    setQuotesFromStore(state.quotes)
  }, [state]);

  function handleSearchInput(input) {
    setQuotes(quotesFromStore);
    let quotesCopy = [...quotesFromStore];
    let filteredQuotes = quotesCopy.filter((quote) => quote.quote.includes(input));
    setQuotes(filteredQuotes)
  }

  return (
    <>
      <main className={style.main}>
        <section className={style.searchContainer}>
          <input placeholder='search quotes...' onChange={(e) => handleSearchInput(e.target.value)}></input>
          <Link to="/add"><button>Add quote</button></Link>
        </section>
        <section className={style.quoteCards}>
          {
            quotes &&
            quotes.map((quote) => <QuoteCard key={quote.id} quote={quote} />)
          }
        </section>
      </main>
    </>
  );
};

export default StartPage;
