// src/components/StarshipList.jsx
import StarshipCard from './StarshipCard';

function StarshipList({ starships }) {
  if (!starships.length) return <p>Loading...</p>;

  return (
    <section>
      <h2>Starships ({starships.length})</h2>
      <ul>
        {starships.map((starship, index) => (
          <StarshipCard key={index} starship={starship} />
        ))}
      </ul>
    </section>
  );
}

export default StarshipList;
