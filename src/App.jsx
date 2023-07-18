// App.js
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import StartPage from "./pages/StartPage";
import QuotePage from "./pages/QuotePage";
import Header from "./components/Header";
import AddQuote from "./pages/AddQuote";
import quotesData from "./assets/quotes.json";
import EditQuote from "./pages/EditQuote";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fillStock } from "./actions/quoteAction";

function App() {
  const dispatch = useDispatch();
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    setQuotes(quotesData);
  }, []);

  useEffect(() => {
    if (quotes.length !== 0) {
      dispatch(fillStock(quotes));
    }
  }, [quotes]);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<StartPage />} />
        <Route path="/quotepage/:id" element={<QuotePage />} />
        <Route path="/add" element={<AddQuote />}></Route>
        <Route path="/edit/:id" element={<EditQuote />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
