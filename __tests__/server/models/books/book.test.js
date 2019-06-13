const Book = require("../../../../src/server/models/books/book");

describe("Book", () => {
  test("should have and retrieve all fields", () => {
    const id = 1;
    const title = "test title";
    const author = "test author";
    const isbn = 123;
    const description = "test description";
    const imgUrl = "imgUrl";

    const underTest = new Book(id, title, author, isbn, description, imgUrl);

    expect(underTest.id).toBe(id);
    expect(underTest.title).toBe(title);
    expect(underTest.author).toBe(author);
    expect(underTest.isbn).toBe(isbn);
    expect(underTest.description).toBe(description);
    expect(underTest.imageUrl).toBe(imgUrl);
  });
});
