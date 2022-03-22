const HTTP = require('http');
const PORT = 31234;

const SERVER = HTTP.createServer( (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.write("Hello Sam!");
  res.end();
});

SERVER.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}...`);
})
