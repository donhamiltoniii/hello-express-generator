module.exports = {
  renderBooks: (req, res, next) => {
    res.render("books", {
      books: {
        5: {
          id: 5,
          title: "Test Driven Development: By Example",
          author: "Kent Beck",
          isbn: "9780321146533",
          description: "TDD!!!",
          imageUrl:
            "https://images-na.ssl-images-amazon.com/images/I/51kDbV%2BN65L._SX396_BO1,204,203,200_.jpg"
        }
      }
    });
  },
  renderBook: (req, res, next) => {
    res.render("book", {
      book: {
        id: 1,
        title: "Refactoring",
        author: "Martin Fowler",
        isbn: "0201485672",
        description:
          "Description: Great, amazing book about TDD and refactoring",
        imageUrl:
          "https://images-na.ssl-images-amazon.com/images/I/51K-M5hR8qL._SX392_BO1,204,203,200_.jpg"
      }
    });
  }
};
