import React, { useState } from "react";

function AddQuoteForm({ onAddQuote }) {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Skapa ett nytt objekt med citatet och författaren
    const newQuote = {
      quote,
      author,
    };
    // Anropa funktionen för att lägga till citatet och skicka det som argument
    onAddQuote(newQuote);
    // Återställ formuläret efter att citatet har lagts till
    setQuote("");
    setAuthor("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={quote}
        onChange={(e) => setQuote(e.target.value)}
        placeholder="Quote"
        required
      />
      <input
        type="text"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        placeholder="Author"
        required
      />
      <button type="submit">Add quote</button>
    </form>
  );
}

export default AddQuoteForm;
