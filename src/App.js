import logo from "./logo.svg";
import "./App.css";
import Quote from "./components/fetch/Quote";
import Axios from "./components/Axios/Axios";
import Swr from "./components/SWR/Swr";

function App() {
  return (
    <div className="App">
      <h1>4 ways to fetch</h1>
      <Quote></Quote>
      <Axios></Axios>
      <Swr></Swr>
    </div>
  );
}

export default App;
