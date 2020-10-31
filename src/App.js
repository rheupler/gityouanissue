import React, { useEffect, useState } from "react";
import "./App.css";
import "./scripts.js";
import Navbar from "./components/Navbar";
import Labels from "./components/Labels";
import Results from "./components/Results";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [results, setResults] = useState([]);
  const [sort, setSort] = useState("created");
  const [language, setLanguage] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleLangChange = (e) => {
    setLanguage(e.target.value);
    setSearchTerm("");
  };

  const handleLabelChange = (e) => {
    setSearchTerm("");
    setLabel(e.target.value);
  };

  const handleUpdate = (prop) => {
    setIsLoading(false);
    setResults(prop);
  };

  const handleSort = (e) => {
    setSort(e.target.value);
  };

  const updateSearchState = (props) => {
    setSearchTerm(props);
  };

  useEffect(() => {
    fetch(
      `https://api.github.com/search/issues?q=bug+label:${label}+language:${language}+state:open&per_page=80&sort=${sort}&order=desc`
    )
      .then((response) => response.json())
      .then((data) => {
        setResults(data.items);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  });

  return (
    <div className="App">
      <Navbar />
      <Labels
        handleLangChange={handleLangChange}
        handleLabelChange={handleLabelChange}
      />
      <Results
        data={results}
        isLoading={isLoading}
        language={language}
        label={label}
        sort={sort}
        searchTerm={searchTerm}
        handleUpdate={handleUpdate}
        handleSort={handleSort}
        updateSearchState={updateSearchState}
      />
    </div>
  );
};

export default App;
