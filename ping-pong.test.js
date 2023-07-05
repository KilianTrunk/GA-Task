const request = require("supertest");
const app = require("./ping-pong");

describe("GET /ping", () => {
  it("should respond with 'pong, {username}!' when username is provided", async () => {
    const response = await request(app).get("/ping?username=Izak");
    expect(response.status).toBe(200);
    expect(response.text).toBe("pong, Izak!");
  });

  it("should respond with 'pong, GameArt back-end developer!' when no username is provided", async () => {
    const response = await request(app).get("/ping");
    expect(response.status).toBe(200);
    expect(response.text).toBe("pong, GameArt back-end developer!");
  });
});
