const request = require("supertest");

const app = require("../../../app");

describe("Home Router/Controller", () => {
  test("should successfully redirect", done => {
    // Arrange
    request(app)
      // Act
      .get("/")
      .then(response => {
        // Assert
        expect(response.statusCode).toBe(302);
        done();
      });
  });

  test("should successfully redirect from '/' to '/books'", done => {
    // Arrange
    request(app)
      // Act
      .get("/")
      .then(response => {
        // Assert
        expect(response.req.path).toBe("/");
        expect(response.headers.location).toBe("/books");
        done();
      });
  });
});
