import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";

function App() {
  const movies = [
    {
      id: 1,
      title: "Interstellar",
      year: 2014,
      rating: 8.7,
    },
    {
      id: 2,
      title: "Inception",
      year: 2010,
      rating: 8.8,
    },
    {
      id: 3,
      title: "The Dark Knight",
      year: 2008,
      rating: 9.0,
    },
  ];

  return (
    <div>
      <h1>Movie Search App</h1>

      <SearchBar />

      <MovieList movies={movies} />
    </div>
  );
}

export default App;