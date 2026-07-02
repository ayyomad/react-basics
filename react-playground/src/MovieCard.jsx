function MovieCard({ title, rating }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>Rating: {rating}</p>
    </div>
  );
}

export default MovieCard;