import MoviesList from "./MoviesList";
import { useState, useEffect } from "react";

function Home() {
  const [Movies, setMovies] = useState([]);

  async function fetchData() {
    let Data = await fetch(`${process.env.REACT_APP_MOVIES}/trending`);
    let ParesesData = await Data.json();
    setMovies(ParesesData);
  }
  useEffect(() => {
    fetchData();
  }, []);
  return Movies.map((element) => {
    return <MoviesList MoviesData={element} key={element.id} />;
  });
}
export default Home;
