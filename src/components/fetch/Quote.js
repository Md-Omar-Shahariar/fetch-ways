import React, { useEffect, useState } from "react";

const Quote = () => {
  const [quote, setQoute] = useState(null);
  useEffect(() => {
    const fetchQuote = async () => {
      const res = await fetch("https://api.quotable.io/random");
      const data = await res.json();
      setQoute(data);
    };
    fetchQuote();
  }, []);
  return (
    <div>
      <h2>Get Quote using fetch api</h2>
      <div>{quote?.content}</div>
    </div>
  );
};

export default Quote;
