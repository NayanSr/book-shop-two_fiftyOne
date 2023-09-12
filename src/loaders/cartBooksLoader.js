/* const cartBooksLoader = async () => {
  const fetchBooks = await fetch("books.json");
  const orderedBooks = await fetchBooks.json();

  return orderedBooks;
};

export default cartBooksLoader; */

import { getShopingCard } from "../utility/fakedb";

const cartBooksLoader = async () => {
  const fetchBooks = await fetch("books.json");
  const allBooks = await fetchBooks.json();

  const orderedBooks = [];
  const savedIdsInLocalstorage = getShopingCard();
  for (const id in savedIdsInLocalstorage) {
    const addedBook = allBooks.find((pd) => pd.id === parseInt(id));
    // if (addedBook) {
    // const quantity = savedIdsInLocalstorage[id];
    addedBook.quantity = savedIdsInLocalstorage[id];
    orderedBooks.push(addedBook);
    // }
  }

  return [allBooks, orderedBooks];
};

export default cartBooksLoader;
