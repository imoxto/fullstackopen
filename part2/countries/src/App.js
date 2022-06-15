import { useState, useEffect } from "react";
import axios from "axios";
import Countries from "./components/Countries";
function App() {
  const [query, setQuery] = useState("");
  const [countries, setCountries] = useState([]);
  const displayCountries = countries.filter((cntry) => cntry.name.common.toLowerCase().includes(query.toLowerCase()));
  useEffect(() => {
    console.log("looking up all countries");
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => setCountries(res.data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <>
      <div>
        Find countries <input type={"text"} value={query} onChange={(e) => setQuery(e.target.value)} />
      </div>
      {query ? <Countries countries={displayCountries} /> : <p>Type your query above to display countries</p>}
    </>
  );
}

export default App;
