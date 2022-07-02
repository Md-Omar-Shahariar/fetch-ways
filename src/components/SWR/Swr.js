import React, { useEffect, useState } from "react";
import useSWR from "swr";

const Swr = () => {
  //   const [quote, setQoute] = useState(null);
  //   useEffect(() => {
  //     const fetchQuote = async () => {
  //       const res = await fetch("https://api.quotable.io/random");
  //       const data = await res.json();
  //       setQoute(data);
  //     };
  //     fetchQuote();
  //   }, []);
  const fetcher = async (...args) => {
    const res = await fetch(...args);
    const data = await res.json();
    return data;
  };

  const { data, error } = useSWR("https://api.quotable.io/random", fetcher);
  console.log(data);
  return (
    <div>
      <h2>Get Quote using SWR api</h2>
      <div>{data?.content}</div>
    </div>
  );
};

export default Swr;
