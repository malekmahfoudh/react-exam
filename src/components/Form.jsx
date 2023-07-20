import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editQuote } from "../actions/quoteAction";

export default function Form({
    quote,
    action,
    actionAuthor,
    actionQuote,
    actionEpisode,
}) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const state = useSelector((state) => state.quotes);
    const params = useParams();

    const [quotes, setQuotes] = useState();
    const [newQuote, setNewQuote] = useState({
        author: "",
        quote: "",
        episode: "",
    });

    useEffect(() => {
        let currentQuote = state.find((q) => parseInt(params.id) === q.id);
        setQuotes(currentQuote);
    }, [state, params.id]);

    return (
        <form onSubmit={action}>
            <section>
                <label htmlFor="quote">Quote:</label>
                <textarea
                    type="text"
                    id="quote"
                    name="quote"
                    defaultValue={quote && quote.quote}
                    onChange={actionQuote}
                />
            </section>
            <section>
                <label htmlFor="author">Author:</label>
                <input
                    type="text"
                    id="author"
                    name="author"
                    defaultValue={quote && quote.author}
                    onChange={actionAuthor}
                />
            </section>
            <section>
                <label htmlFor="episode">Episode:</label>
                <input
                    type="text"
                    id="episode"
                    name="episode"
                    defaultValue={quote && quote.episode}
                    onChange={actionEpisode}
                />
            </section>
            <section className="fomr-buttons">
                <button onClick={action} type="button">
                    Save
                </button>
                <Link to="/">
                    <button>Cancel</button>
                </Link>
            </section>
        </form>
    );
}