function MovieCard({ title, year, rating }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>Year: {year}</p>
      <p>Rating: {rating}</p>
      <hr />
    </div>
  );
}

export default MovieCard;