import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addQuote } from "../actions/quoteAction";
import style from "./AddQuote.module.scss";
import Form from "../components/Form";

export default function AddQuote() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [quote, setQuote] = useState("");
    const [author, setAuthor] = useState("");
    const [episode, setEpisode] = useState("");

    const addNewQuote = (e) => {
        e.preventDefault();
        console.log(quote);

        dispatch(addQuote(quote, author, episode));
        navigate("/");
    };

    return (
        <article className={style.newQuote}>
            <Form
                action={(e) => addNewQuote(e)}
                actionAuthor={(e) => {
                    setAuthor(e.target.value);
                }}
                actionQuote={(e) => {
                    setQuote(e.target.value);
                }}
                actionEpisode={(e) => {
                    setEpisode(e.target.value);
                }}
            />
        </article>
    );
}
