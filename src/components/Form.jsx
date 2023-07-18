import { Link } from 'react-router-dom'

export default function Form({quote, action, actionAuthor, actionQuote, actionEpisode}) {
    return (
        <form onSubmit={action}>
            <section>
                <label htmlFor="quote">Quote:</label>
                <textarea type="text" id="quote" name="quote" defaultValue={quote && quote.quote} onChange={actionQuote} />
            </section>
            <section>
                <label htmlFor="author">Author:</label>
                <input type="text" id="author" name="author" defaultValue={quote && quote.author} onChange={actionAuthor} />
            </section>
            <section>
                <label htmlFor="episode">Episode:</label>
                <input type="text" id="episode" name="episode" defaultValue={quote && quote.episode} onChange={actionEpisode} />
            </section>
            <section className="fomr-buttons">
                <button type="submit">Save</button>
                <Link to="/"><button>Cancel</button></Link>
            </section>
        </form>
    )
}