const getQuote = async () => {
  const res = await fetch("https://api.quotable.io/random");
  const data = await res.json();
  console.log(data);
  return data;
};

export default getQuote;
