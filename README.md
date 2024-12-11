# Silent Error Handling in Node.js HTTP Server

This repository demonstrates a common error in Node.js where exceptions during request handling are silently ignored, leading to no response to the client.  The error is only logged to the console, making debugging difficult.

## Bug

The `bug.js` file contains a Node.js HTTP server that simulates an error condition. If the error occurs, it's logged, but the client doesn't receive any response.

## Solution

The `bugSolution.js` file shows the corrected approach.  It includes proper error handling that sends an appropriate error response to the client in case of exceptions.