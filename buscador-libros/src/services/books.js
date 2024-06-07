const API_KEY = "AIzaSyCyXZCVatz80bH1d8y-EuzY36Dp2PVNHps";
export const searchBooks = async (search) => {
  if (search === "") return;

  try {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${search}&printType=books&projection=lite&key=${API_KEY}`
    );
    const json = await response.json();
    const books = json.items;
    return books?.map((book) => ({
      id: book.id,
      title: book.volumeInfo.title,
      author: book.volumeInfo.authors?.[0] ?? "unkown",
      published: book.volumeInfo.publishedDate,
      image: book.volumeInfo.imageLinks?.thumbnail,
    }));
  } catch (e) {
    throw new Error("Error al buscar los librossss");
  }
};
