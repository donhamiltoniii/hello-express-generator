const BookRepository = require("./books/book-repository");
const Book = require("./books/book");

const repo = new BookRepository();

function populateBooks() {
  repo.addBook(
    new Book(
      1,
      "Refactoring",
      "Martin Fowler",
      "0201485672",
      "Description: Great, amazing book about TDD and refactoring",
      "https://images-na.ssl-images-amazon.com/images/I/51K-M5hR8qL._SX392_BO1,204,203,200_.jpg"
    )
  );
  repo.addBook(
    new Book(
      2,
      "Extreme Programming Explained",
      "Kent Beck",
      "0201616416",
      "Programming, but extreme",
      "https://images-na.ssl-images-amazon.com/images/I/416Y8MS65TL._SX377_BO1,204,203,200_.jpg"
    )
  );
  repo.addBook(
    new Book(
      3,
      "Test Driven Development: By Example",
      "Kent Beck",
      "9780321146533",
      "TDD!!!",
      "https://images-na.ssl-images-amazon.com/images/I/51kDbV%2BN65L._SX396_BO1,204,203,200_.jpg"
    )
  );
  repo.addBook(
    new Book(
      4,
      "Test Driven Development: By Example",
      "Kent Beck",
      "9780321146533",
      "TDD!!!",
      "https://images-na.ssl-images-amazon.com/images/I/51kDbV%2BN65L._SX396_BO1,204,203,200_.jpg"
    )
  );
  repo.addBook(
    new Book(
      5,
      "Test Driven Development: By Example",
      "Kent Beck",
      "9780321146533",
      "TDD!!!",
      "https://images-na.ssl-images-amazon.com/images/I/51kDbV%2BN65L._SX396_BO1,204,203,200_.jpg"
    )
  );
  repo.addBook(
    new Book(
      6,
      "Test Driven Development: By Example",
      "Kent Beck",
      "9780321146533",
      "TDD!!!",
      "https://images-na.ssl-images-amazon.com/images/I/51kDbV%2BN65L._SX396_BO1,204,203,200_.jpg"
    )
  );
  repo.addBook(
    new Book(
      7,
      "Test Driven Development: By Example",
      "Kent Beck",
      "9780321146533",
      "TDD!!!",
      "https://images-na.ssl-images-amazon.com/images/I/51kDbV%2BN65L._SX396_BO1,204,203,200_.jpg"
    )
  );
  repo.addBook(
    new Book(
      8,
      "Test Driven Development: By Example",
      "Kent Beck",
      "9780321146533",
      "TDD!!!",
      "https://images-na.ssl-images-amazon.com/images/I/51kDbV%2BN65L._SX396_BO1,204,203,200_.jpg"
    )
  );
}

populateBooks();

module.exports = repo;
