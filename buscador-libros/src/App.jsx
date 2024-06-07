import { useState } from "react";
import "./App.css";
import { BooksList } from "./components/Books";
import { useBooks } from "./hooks/useBooks";

export default function App() {
  const [search, setSearch] = useState("");
  const { books, getBooks } = useBooks({ search });

  const handleSubmit = async (event) => {
    event.preventDefault();
    getBooks();
  };

  const handleChange = (event) => {
    const newSearch = event.target.value;
    if (newSearch.startsWith(" ")) return;
    setSearch(newSearch);
  };

  return (
    <div className="page">
      <header>
        <h2>Book Finder</h2>
        <form onSubmit={handleSubmit} className="form">
          <input
            onChange={handleChange}
            value={search}
            type="text"
            placeholder="Lord of the Rings, Hunger Games..."
          />
          <label htmlFor="ordered">Recent</label>
          <button>Search</button>
        </form>
      </header>
      <main>
        <BooksList books={books} />
      </main>
    </div>
  );
}
