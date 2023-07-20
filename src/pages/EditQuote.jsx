import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editQuote } from "../actions/quoteAction";
import Form from "../components/Form";

export default function EditQuote() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const state = useSelector((state) => state.quotes);
    const params = useParams();
    const [quote, setQuote] = useState({
        author: "",
        quote: "",
        episode: "",
    });
    const [newQuote, setNewQuote] = useState({
        author: "",
        quote: "",
        episode: "",
    });

    useEffect(() => {
        let currentQuote = state.find((q) => parseInt(params.id) === q.id);
        setQuote(currentQuote);
    }, [state, params.id]);

    const handleEdit = (e) => {
        e.preventDefault();
        let id = parseInt(params.id);
        if (newQuote.author) {
            dispatch(editQuote(id, "author", newQuote.author));
        }
        if (newQuote.quote) {
            dispatch(editQuote(id, "quote", newQuote.quote));
        }
        // Hitta objektet med samma id som params.id
        // let quoteObj = state.find((item) => item.id == params.id);

        // let newObjBeratTest = {
        //     quote: "Hasta la vista",
        //     author: "Berat",
        //     episode: "13",
        // };
        // dispatch(editQuote(quoteObj, newObjBeratTest));
       
        console.log("Save clicked"); 
        navigate("/");
    };

    return (
        <article className="editQuote">
            <h3>Edit quote: </h3>
            <Form
                quote={quote}
                action={(e) => handleEdit(e)}
                actionAuthor={(e) =>
                    setNewQuote({ ...newQuote, author: e.target.value })
                }
                actionQuote={(e) =>
                    setNewQuote({ ...newQuote, quote: e.target.value })
                }
            ></Form>
        </article>
    );
}