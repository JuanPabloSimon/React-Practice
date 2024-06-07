import { useState } from "react";
import { searchBooks } from "../services/books";
export function useBooks({ search }) {
  const [books, setBooks] = useState([]);
  const getBooks = async () => {
    const newBooks = await searchBooks(search);
    setBooks(newBooks);
  };

  return { books, getBooks };
}
