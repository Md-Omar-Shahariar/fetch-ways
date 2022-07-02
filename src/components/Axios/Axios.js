import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const Axios = () => {
  const [quote, setQoute] = useState(null);
  useEffect(() => {
    const fetchQuote = async () => {
      const res = await axios.get("https://api.quotable.io/random");
      setQoute(res.data);
    };
    fetchQuote();
  }, []);
  return (
    <div>
      <h2>Get Quote using Axios api</h2>
      <div>{quote?.content}</div>
    </div>
  );
};

export default Axios;
