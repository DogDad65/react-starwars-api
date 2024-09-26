// src/services/starshipService.js
const BASE_URL = 'https://swapi.dev/api/starships/';

export async function getAllStarships() {
  try {
    const response = await fetch(BASE_URL);
    if (!response.ok) throw new Error('Failed to fetch starships');
    const data = await response.json();
    return data.results;
  } catch (err) {
    console.error(err);
    return [];
  }
}

export async function searchStarships(query) {
  try {
    const response = await fetch(`${BASE_URL}?search=${query}`); 
    const data = await response.json();
    return data.results;
  } catch (err) {
    console.error(err);
    return [];
  }
}
