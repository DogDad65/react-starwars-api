// src/App.jsx
import { useState } from "react";
import { useEffect } from "react";
import { getAllStarships, searchStarships } from "./services/starshipService";
import StarshipSearch from "./components/StarshipSearch";
import StarshipList from "./components/StarshipList";

function App() {
  const [starships, setStarships] = useState([]);
  const [filteredStarships, setFilteredStarships] = useState([]);

  useEffect(() => {
    async function fetchStarships() {
      const data = await getAllStarships();
      setStarships(data);
      setFilteredStarships(data);
    }
    fetchStarships();
  }, []);

  const handleSearch = async (query) => {
    if (query) {
      const results = await searchStarships(query);
      setFilteredStarships(results);
    } else {
      setFilteredStarships(starships);
    }
  };

  return (
    <main>
      <StarshipSearch onSearch={handleSearch} />
      <StarshipList starships={filteredStarships} />
    </main>
  );
}

export default App;
