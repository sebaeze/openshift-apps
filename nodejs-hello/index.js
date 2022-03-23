const http = require('http');
const port = process.env.PORT || 3000;

var ENV_RESPUESTA=(process.env.RESPUESTA==undefined ? "**falta variable RESPUESTA**" : process.env.RESPUESTA ) ;
//
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  const msg = '\n*** RESPUESTA --> '+ENV_RESPUESTA+'"';
  res.end(msg);
});

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});