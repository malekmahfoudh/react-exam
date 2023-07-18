import { useState, useEffect } from "react";
import { Form, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addQuote } from "../actions/quoteAction";
import style from "./AddQuote.module.scss";

export default function AddQuote() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [episode, setEpisode] = useState("");

  const addNewQuote = (e) => {
    e.preventDefault();
    let newQuote = {
      quote: quote,
      author: author,
      episode: episode,
      id: id,
    };

    dispatch(addQuote(newQuote));
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
