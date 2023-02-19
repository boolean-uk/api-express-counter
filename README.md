# Express Counter

In this exercise we will build a simple counter API using express.

## Learning Objectives

- Explain how to set up and run an Express application
- Build a simple Express API and send a HTTP request to an available endpoint using a HTTP client
- Explain that JSON is a widely-used language-agnostic format for encoding data as attribute value pairs
- Diagram the request and response cycle for an Express API.
- Use console.log() and read the result in the server logs

## Express Setup

To set up a new express application, in an empty folder follow these steps.

1. Initialize npm. You can accept all the defaults.

```md
npm init
```

2. Install the [express](https://expressjs.com/) library

```md
npm install express
```

3. Install [nodemon](https://www.npmjs.com/package/nodemon). nodemon is a utility tool that will automatically restart our express server any time we change code.

```md
npm install --save-dev nodemon
```

4. Install the [morgan](https://expressjs.com/en/resources/middleware/morgan.html) middleware. Express middleware allows us to extend express with additional functionality. Morgan is express middleware we can use to have our server automatically log all requests. This helps gives us visibility of what our server is doing.

```md
npm install morgan
```

5. Install the [cors](https://expressjs.com/en/resources/middleware/cors.html) middleware. This allows us to make HTTP requests to our API using fetch from the browser.

```md
npm install cors
```

6. Inside a `/src` directory, create two files.

- Create a file that will run our app: `index.js` . This is our _entrypoint_ - the source file that will start running our server.
- Create a file that will define what our app does: `server.js`

7. In the app runner, add this code:

```js
const app = require("./index.js");
const port = 3030;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}/`);
});
```

8. In the file that defines what the app does:

```javascript
//Include the express library
const express = require("express");
//Include the morgan middleware
const morgan = require("morgan");
//Include the cors middleware
const cors = require("cors");

//Create a new express application
const app = express();

//Tell express we want to use the morgan library
app.use(morgan("dev"));
//Tell express we want to use the cors library
app.use(cors());
//Tell express to parse JSON in the request body
app.use(express.json());

module.exports = app;
```

9. Update your package.json file and replace the "scripts" section with the following:

```json
"scripts": {
   "start" : "npx nodemon ./src/index.js"
},
```

10. Finally, start up our server!

```md
npm start
```

Our servers is now running and _listening_ for HTTP requests.

## Instructions

Your application should maintain a simple numeric counter and provide the endpoints detailed in the [API Spec](https://boolean-uk.github.io/api-express-counter/).

Each route should be detailed in a sequence diagram in the same way you did during the API address book exercise.

Test each route using:

- `fetch`
- `curl`
- An API testing tool such as postman or insomnia

## Running tests

Run the following commands from your project directory to run the test suites:

```sh
npm test # standard criteria
npm run test-extensions # extension criteria
```

You can also focus on one test at a time - use the [jest docs](https://jestjs.io/docs/cli) to help filter which tests to run. We recommend you run tests manually with the option `--forceExit`.

For example, for the following test:

```js
it("describes an invidual test", async () => {
  const response = await supertest(app).get("/books");

  expect(response.status).toEqual(200);
});
```

Here are two ways to run it.

```sh
npx jest -t "describes an invidual test" --forceExit
npx jest test/api/routes/books.spec.js --forceExit # remember to add the 'f' before it()
```

## Extension 1

Add a route as detailed in the [API Spec Extension 1](https://boolean-uk.github.io/api-express-counter/#tag/extension-1). For example, making a PUT request to `/counter?value=20` should set the value of the counter to 20. Use the `req.query` property in your callback to get the value provided. See the [express documentation](https://expressjs.com/en/api.html#req.query). If no value is provided, the counter should not be changed.

## Extension 2

Using [route parameters](https://expressjs.com/en/guide/routing.html), update your API to keep track of multiple counters. Allow the client to specify the counter name as part of the URL. With this in mind, build the endpoints as detailed in the [API Spec Extension 2](https://boolean-uk.github.io/api-express-counter/#tag/extension-2).
