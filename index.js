const HTTP = require('http');
const PORT = 3000;

const SERVER = HTTP.createServer( (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.write("Hello world");
  res.end();
});

SERVER.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}...`);
})
