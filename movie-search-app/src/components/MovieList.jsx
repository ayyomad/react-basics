import MovieCard from "./MovieCard";

function MovieList({ movies }) {
  return (
    <div>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          title={movie.title}
          year={movie.year}
          rating={movie.rating}
        />
      ))}
    </div>
  );
}

export default MovieList;