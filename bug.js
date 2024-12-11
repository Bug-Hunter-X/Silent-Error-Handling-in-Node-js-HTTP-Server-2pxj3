const http = require('http');

const server = http.createServer((req, res) => {
  // Unexpected error handling
  try {
    // Simulate an error
    const result = someFunctionThatMightThrow();
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Success!');
  } catch (error) {
    // Log the error but don't respond to the client
    console.error('Error:', error);
  }
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});

function someFunctionThatMightThrow() {
  // Simulate a condition that might throw an error
  if (Math.random() < 0.5) {
    throw new Error('Something went wrong!');
  }
  return 'Success';
}