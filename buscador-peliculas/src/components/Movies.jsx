function ListOfMovies({ movies }) {
  return (
    <ul className="moviesList">
      {movies.map((movie) => (
        <li className="poster" key={movie.id}>
          <h3>{movie.title}</h3>
          <p>{movie.year}</p>
          <img src={movie.poster} alt={movie.title} />
        </li>
      ))}
    </ul>
  );
}

function ListEmpty() {
  return <p>No se encontraron resultados</p>;
}

export function Movies({ movies }) {
  const hasMovies = movies?.length > 0;
  return hasMovies ? <ListOfMovies movies={movies} /> : <ListEmpty />;
}
