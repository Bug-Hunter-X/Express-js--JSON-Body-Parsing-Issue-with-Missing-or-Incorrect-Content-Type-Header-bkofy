# Express.js JSON Body Parsing Bug

This repository demonstrates a common issue in Express.js applications where the `req.body` is empty when the incoming request lacks the correct `Content-Type` header.  The server is unable to properly parse the JSON payload resulting in unexpected behavior.

## Bug Description

When sending a POST request to the `/data` endpoint without specifying or using an incorrect  `Content-Type: application/json` header, the server incorrectly processes the request and logs an empty `req.body` object. This leads to application errors as the expected JSON data is unavailable.

## Solution

The solution involves explicitly setting the `Content-Type` header in the request to `application/json`, thus ensuring correct parsing by Express.js's `express.json()` middleware. If the header is missing, the middleware may not attempt to parse the body as JSON, leading to the empty object logged to the console.

## How to Reproduce

1. Clone the repository.
2. Navigate to the project directory.
3. Run `npm install`.
4. Run `node bug.js`.
5. Send a POST request to `http://localhost:3000/data` with a JSON payload in the body. Ensure the `Content-Type` header is correct: `Content-Type: application/json`.
6. Observe the console output, which should show the received data.
7. Repeat the request, but this time omit or use an incorrect  `Content-Type` header and see that the console displays an empty object, reproducing the bug. 
8. Run `node bugSolution.js` to see the working solution which handles both cases.

