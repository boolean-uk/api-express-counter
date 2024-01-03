const supertest = require("supertest")
let app

describe("Counter Endpoint", () => {
  beforeEach(() => {
    app = require("../../../src/server.js")
  })
  describe("GET /counter", () => {
    it("Retrieve the current counter", async () => {
      const response = await supertest(app).get(`/counter`)

      expect(response.status).toEqual(200)
      expect(response.body.counter).toEqual(0)
    })
  })
  describe("POST /counter", () => {
    it("Increment the counter", async () => {
      const response = await supertest(app).post(`/counter/increment`)
      const response2 = await supertest(app).post(`/counter/increment`)

      expect(response.status).toEqual(201)
      expect(response.body.counter).toEqual(1)
      expect(response2.body.counter).toEqual(2)
    })
    it("Decrement the counter", async () => {
      const response = await supertest(app).post(`/counter/decrement`)
      const response2 = await supertest(app).post(`/counter/decrement`)

      expect(response.status).toEqual(201)
      expect(response.body.counter).toEqual(-1)
      expect(response2.body.counter).toEqual(-2)
    })
    it("Double the counter", async () => {
      await supertest(app).post(`/counter/increment`)
      const response = await supertest(app).post(`/counter/double`)
      const response2 = await supertest(app).post(`/counter/double`)

      expect(response.status).toEqual(201)
      expect(response.body.counter).toEqual(2)
      expect(response2.body.counter).toEqual(4)
    })
  })
  describe("DELETE /counter", () => {
    it("Reset the counter for the provided name to 0", async () => {
      await supertest(app).post(`/counter/increment`)
      const response1 = await supertest(app).get(`/counter`)
      const response2 = await supertest(app).delete(`/counter`)

      expect(response1.body.counter).toEqual(1)
      expect(response2.status).toEqual(200)
      expect(response2.body.counter).toEqual(0)
    })
  })
})
