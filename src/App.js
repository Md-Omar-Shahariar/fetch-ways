import logo from "./logo.svg";
import "./App.css";
import Quote from "./components/fetch/Quote";
import Axios from "./components/Axios/Axios";
import Swr from "./components/SWR/Swr";
import Query from "./components/Query/Query";
import { useEffect, useState } from "react";
import { QueryClientProvider, QueryClient } from "react-query";

function App() {
  const client = new QueryClient();

  return (
    <div className="App">
      <h1>4 ways to fetch</h1>
      <Quote></Quote>
      <Axios></Axios>
      <Swr></Swr>
      <QueryClientProvider client={client}>
        <Query></Query>
        <Query></Query>
      </QueryClientProvider>
    </div>
  );
}

export default App;
