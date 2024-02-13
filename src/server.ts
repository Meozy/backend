import http from "node:http";

const PORT =8080;

const server = http.createServer((_req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Welcome to our REST API!');
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
