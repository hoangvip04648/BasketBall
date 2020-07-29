const https = require('https');
const http = require('http');
const app = require('./app');
const fs = require('fs');

const port = process.env.PORT || 3000;


const options = {
    key: fs.readFileSync('test-ssl.local.key'),
    cert: fs.readFileSync('test-ssl.local.crt')
  };

http.createServer(options, app).listen(port);

console.log("Server is running on port 3000");