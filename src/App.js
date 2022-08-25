import "./App.css";
import axios from "axios";
import React, { useEffect, useState } from "react";

function App() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [loading, setLoading] = useState("Get New Quote")
  useEffect(() => {
    let data = async () => {
      setLoading("Loading...")
      // let res = await axios.get("https://api.quotable.io/random");
      let res = await axios.get(
        "https://quote-garden.herokuapp.com/api/v3/quotes/random"
      );
      setQuote(res.data.data[0].quoteText);
      setAuthor(res.data.data[0].quoteAuthor);
      setLoading("Get New Quote")
    };
    data();
  }, []);

  let fetchQuote = async () => {
    setLoading("Loading...")
    let res = await axios.get(
      "https://quote-garden.herokuapp.com/api/v3/quotes/random"
    );
    setQuote(res.data.data[0].quoteText);
    setAuthor(res.data.data[0].quoteAuthor);
    setLoading("Get New Quote")
  };

  return (
    <div className="App">
      <div className="app-2">
        <h1 className="heading font-bold text-4xl mt-16">"Quotes" Website</h1>
        <div className="quote-container bg-black text-white p-4 m-4 w-fit rounded-lg mt-12 lg:ml-auto lg:mr-auto">
          <div className="border-4 p-4 lg:w-96  rounded-md">
            <h1 className="font-bold">Quote : </h1>
            <h2 className="quote ">"{quote}"</h2>
          </div>
          <div className="mt-4">
            <h1 className="font-bold">Author :</h1>
            <h3 className="author ">- {author}</h3>
          </div>
          <div className="btn-contain relative bg-white text-black w-fit p-3 ml-0 m-2 hover:bg-blue-300 font-bold rounded-lg  mt-12 lg:ml-auto lg:mr-auto">
            <button onClick={fetchQuote} className="btn">
              {loading}
            </button>
          </div>
        </div>
        <h2 className="footer">love ❤️ from jayesh</h2>
      </div>
    </div>
  );
}

export default App;
