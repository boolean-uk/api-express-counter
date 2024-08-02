# Express Counter

In this exercise we will build a simple counter API using express.

## Learning Objectives

- Explain how to set up and run an Express application
- Build a simple Express API and send a HTTP request to an available endpoint using a HTTP client
- Explain that JSON is a widely-used language-agnostic format for encoding data as attribute value pairs
- Diagram the request and response cycle for an Express API.
- Use console.log() and read the result in the server logs

## Express Setup

There are already some files and packages included in this repository, including a test suite. You will have to create an `src` folder and build the express application from scratch.

[Use these instructions to help you](https://github.com/boolean-uk/api-express-setup).

Do not blindly copy commands from the instructions linked above, some steps can be skipped due to the files already included in this repository.

## Instructions

Your application should maintain a simple numeric counter and provide the endpoints detailed in the [API Spec](https://boolean-uk.github.io/api-express-counter/).

Each route should be detailed in a sequence diagram in the same way that you will have been shown during the morning lesson when covering the request-response cycle. Here is an example:
![image](https://github.com/boolean-uk/api-express-counter/assets/16806557/4b23b5b4-189a-4dc4-83ef-c700b855005f)

Test each route using:
- `fetch` (JavaScript)
- `curl` (Command Line / Terminal / GitBash)
- An API testing tool such as Postman or Insomnia

## Running tests

Run the following commands from your project directory to run the test suites:
```sh
$ npm test # standard criteria
$ npm run test-extensions # extension criteria
```

You can also focus on one test at a time - use the [jest docs](https://jestjs.io/docs/cli) to help filter which tests to run. We recommend you run tests manually with the option `--forceExit`.

For example, for the following test:
```js
it("describes an invidual test", async () => {
  const response = await supertest(app).get("/books")

  expect(response.status).toEqual(200)
})
```

Here are two ways to run it.
```sh
$ npx jest -t "describes an invidual test" --forceExit
$ npx jest test/api/routes/books.spec.js --forceExit # remember to add the 'f' before it()
```

## Extension 1
Add a route as detailed in the [API Spec Extension 1](https://boolean-uk.github.io/api-express-counter/#tag/extension-1). For example, making a PUT request to `/counter?value=20` should set the value of the counter to 20. Use the `req.query` property in your callback to get the value provided. See the [express documentation](https://expressjs.com/en/api.html#req.query). If no value is provided, the counter should not be changed.

## Extension 2
Using [route parameters](https://expressjs.com/en/guide/routing.html), update your API to keep track of multiple counters. Allow the client to specify the counter name as part of the URL. With this in mind, build the endpoints as detailed in the [API Spec Extension 2](https://boolean-uk.github.io/api-express-counter/#tag/extension-2).
