// Load HTTP module
const http = require("http");

const port = process.env.PORT || 3000;

// Create HTTP server
const server = http.createServer(function (req, res) {
  // Set the response HTTP header with HTTP status and Content type
  res.writeHead(200, { "Content-Type": "text/plain" });

  // Send the response body "Hello World"
  console.log("Hello world")
  res.end("Hello World\n");
});

// Prints a log once the server starts listening
server.listen(port, function () {
  console.log(`Server running... `);
});
