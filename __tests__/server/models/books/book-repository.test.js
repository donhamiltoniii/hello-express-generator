const BookRepository = require("../../../../src/server/models/books/book-repository");
const Book = require("../../../../src/server/models/books/book");

describe("BookRepository", () => {
  let underTest;

  beforeEach(() => {
    // Arrange
    underTest = new BookRepository();
  });

  test("should be able to add a book", () => {
    // Act
    const book = new Book(1, "", "", "", "", "");
    underTest.addBook(book);

    // Assert
    expect(underTest.books).toStrictEqual({ 1: book });
  });

  test("should be able to remove a book", () => {
    // Arrange
    const book = new Book(1, "", "", "", "", "");
    underTest.addBook(book);

    // Act
    underTest.removeBook(1);

    // Assert
    expect(underTest.books).toStrictEqual({});
  });

  test("should be able to get a single book", () => {
    // Arrange
    const book = new Book(1, "", "", "", "", "");
    underTest.addBook(book);

    // Act
    const retrievedBook = underTest.getBook(1);

    // Assert
    expect(retrievedBook).toStrictEqual(book);
  });

  test("should be able to get another single book", () => {
    // Arrange
    const book = new Book(2, "a", "b", "c", "d", "e");
    underTest.addBook(book);

    // Act
    const retrievedBook = underTest.getBook(2);

    // Assert
    expect(retrievedBook).toStrictEqual(book);
  });
});
