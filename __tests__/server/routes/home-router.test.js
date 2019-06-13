const request = require("supertest");

const app = require("../../../app");

describe("Home Router/Controller", () => {
  test("should successfully redirect", done => {
    // Arrange
    request(app)
      // Act
      .get("/")
      .then(response => {
        console.log(response);
        // Assert
        expect(response.statusCode).toBe(302);
        done();
      });
  });
});
