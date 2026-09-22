function MovieCard({ poster, title, year }) {
  const posterUrl = poster && poster !== 'N/A' ? poster : 'https://placehold.co/300x445?text=No+Poster'

  return (
    <div className="movie-card">
      <img className="movie-card__poster" src={posterUrl} alt={`Poster ${title}`} />
      <div className="movie-card__info">
        <h3 className="movie-card__title">{title}</h3>
        <p className="movie-card__year">{year}</p>
      </div>
    </div>
  )
}

export default MovieCard