const BookController = require("../../../src/server/controllers/book-controller");
jest.mock("../../../src/server/controllers/book-controller");

const request = require("supertest");
const app = require("../../../app");

describe("Books Router/Controller", () => {
  test("should successfully connect to '/books'", done => {
    // Arrange
    request(app)
      // Act
      .get("/books")
      .then(response => {
        // Assert
        expect(response.statusCode).toBe(200);
        done();
      });
  });

  test("should render a list of books for each provided book when route is '/books'", done => {
    // Arrange
    request(app)
      // Act
      .get("/books")
      .then(response => {
        // Assert
        expect(response.text).toBe(
          '<!DOCTYPE html>\n<html lang="en">\n\n<head>\n  <meta charset="UTF-8" />\n  <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n  <meta http-equiv="X-UA-Compatible" content="ie=edge" />\n  <title>Document</title>\n  <link rel="stylesheet" href="/stylesheets/style.css">\n</head>\n\n<body>\n  <div class="wrapper">\n    <header class="header">\n      <h1 class="header__title">We Can Code IT Library</h1>\n    </header>\n    <main>\n  <div class="container">\n    <ul class="book-cards">\n      <li class="book-card">\n        <figure><img src="https://images-na.ssl-images-amazon.com/images/I/51kDbV%2BN65L._SX396_BO1,204,203,200_.jpg" alt="Test Driven Development: By Example"></figure>\n        <a class="book-card__link" href="/books/5">Test Driven Development: By Example</a>\n      </li>\n    </ul>\n  </div>\n</main>\n    <footer class="footer">\n      <small class="footer__copy">&copy; 2019</small>\n    </footer>\n  </div>\n</body>\n\n</html>'
        );
        done();
      });
  });

  test("should successfully connect to '/books/1'", done => {
    // Arrange
    request(app)
      // Act
      .get("/books/1")
      .then(response => {
        // Assert
        expect(response.statusCode).toBe(200);
        done();
      });
  });

  test("should render a single book", done => {
    // Arrange
    request(app)
      // Act
      .get("/books/1")
      .then(response => {
        // Assert
        expect(response.text).toBe(
          '<!DOCTYPE html>\n<html lang="en">\n\n<head>\n  <meta charset="UTF-8" />\n  <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n  <meta http-equiv="X-UA-Compatible" content="ie=edge" />\n  <title>Document</title>\n  <link rel="stylesheet" href="/stylesheets/style.css">\n</head>\n\n<body>\n  <div class="wrapper">\n    <header class="header">\n      <h1 class="header__title">We Can Code IT Library</h1>\n    </header>\n    <main>\r\n  <section class="book-details">\r\n    <h1>Refactoring</h1>\r\n    <h2>Martin Fowler</h2>\r\n  </section>\r\n  <ul>\r\n    <li>ISBN: 0201485672</li>\r\n    <li>Description: Description: Great, amazing book about TDD and refactoring</li>\r\n  </ul>\r\n  <a href="/">Back to Home</a>\r\n</main>\n    <footer class="footer">\n      <small class="footer__copy">&copy; 2019</small>\n    </footer>\n  </div>\n</body>\n\n</html>'
        );
        done();
      });
  });
});
