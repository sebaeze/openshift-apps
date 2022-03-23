const http = require('http');
const port = process.env.PORT || 3000;
//
var ENV_RESPUESTA = "" ;
try {
   ENV_RESPUESTA= process.env.RESPUESTA || "**falta variable RESPUESTA**" ;	
} catch(err){
	console.log("***error: ",err,";");
}
//
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  const msg = '\n*** RESPUESTA --> '+ENV_RESPUESTA+'"';
  res.end(msg);
});

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});