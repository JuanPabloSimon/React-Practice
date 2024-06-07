export function BooksList({ books }) {
  return (
    <ul className="booksList">
      {books?.length > 0 ? (
        books.map((book) => (
          <li className="poster" key={book.id}>
            <h3>{book.title}</h3>
            <img src={book.image} alt={book.title} />
            <h5>{book.author}</h5>
            <p>{book.published}</p>
          </li>
        ))
      ) : (
        <p>No hay libros por el momento</p>
      )}
    </ul>
  );
}
