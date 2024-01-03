const supertest = require("supertest")
let app

describe("Counter Endpoint", () => {
  beforeEach(() => {
    app = require("../../../src/server.js")
  })
  describe("GET /counter", () => {
    it("Retrieve the current counter for the provided counter name", async () => {
      const response = await supertest(app).get(`/counter/cars`)

      expect(response.status).toEqual(200)
      expect(response.body.counter).toEqual(0)
    })
  })
  describe("POST /counter", () => {
    it("Increment the counter for the provided name", async () => {
      const response = await supertest(app).post(`/counter/cars/increment`)
      const response2 = await supertest(app).post(`/counter/cars/increment`)

      expect(response.status).toEqual(201)
      expect(response.body.counter).toEqual(1)
      expect(response2.body.counter).toEqual(2)
    })
    it("Decrement the counter for the provided name", async () => {
      const response = await supertest(app).post(`/counter/cars/decrement`)
      const response2 = await supertest(app).post(`/counter/cars/decrement`)

      expect(response.status).toEqual(201)
      expect(response.body.counter).toEqual(-1)
      expect(response2.body.counter).toEqual(-2)
    })
    it("Double the counter for the provided name", async () => {
      await supertest(app).put(`/counter/cars?value=2`)
      const response = await supertest(app).post(`/counter/cars/double`)
      const response2 = await supertest(app).post(`/counter/cars/double`)

      expect(response.status).toEqual(201)
      expect(response.body.counter).toEqual(4)
      expect(response2.body.counter).toEqual(8)
    })
  })
  fdescribe("PUT /counter", () => {
    it("Set the counter to a specific value via a query parameter", async () => {
      const response = await supertest(app).put(`/counter?value=100`)
      const response2 = await supertest(app).put(`/counter?value=200`)

      expect(response.status).toEqual(201)
      expect(response.body.counter).toEqual(100)
      expect(response2.body.counter).toEqual(200)
    })
  })
  describe("DELETE /counter", () => {
    it("Reset the counter for the provided name to 0", async () => {
      await supertest(app).post(`/counter/cars/increment`)
      const response1 = await supertest(app).get(`/counter/cars`)
      const response2 = await supertest(app).delete(`/counter/cars`)

      expect(response1.body.counter).toEqual(1)
      expect(response2.status).toEqual(200)
      expect(response2.body.counter).toEqual(0)
    })
  })
})
