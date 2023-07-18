import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { editQuote } from '../actions/quoteAction';
import Form from '../components/Form';

export default function EditQuote() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const state = useSelector((state) => state.quotes);
    const params = useParams();

    const [quote, setQuote] = useState()
    const [newQuote, setNewQuote] = useState({ author: "", quote: "", episode: "" })

    useEffect(() => {
        let currentQuote = state.find((q) => params.id === q.id) 
        setQuote(currentQuote)
    }, [state, params.id])

    const handleEdit = (e) => {
        e.preventDefault();
        if(newQuote.author) {
            dispatch(editQuote(params.id, "author", newQuote.author));
        }
        if(newQuote.quote) {
            dispatch(editQuote(params.id, "quote", newQuote.quote))
        }
        navigate("/")
    }

    return (
        <article className="editQuote">
            <h3>Edit quote: </h3>
            <Form quote={quote} action={(e) => handleEdit(e)} actionAuthor={(e) => setNewQuote({ ...newQuote, "author": e.target.value})} actionQuote={(e) => setNewQuote({ ...newQuote, "quote": e.target.valure})}></Form>
        </article>
    )
 }