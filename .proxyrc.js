const { execFile } = require('child_process');

module.exports = function (app) {
  app.use('/api', (req, res) => {
    // Handle CORS preflight OPTIONS request
    if (req.method === 'OPTIONS') {
      res.writeHead(204, {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
      });
      res.end();
      return;
    }

    const url = 'https://namastedev.com/api' + req.url;

    // Execute curl.exe to fetch the URL, spoofing a modern browser User-Agent
    execFile('curl.exe', [
      '-s',
      '-A', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      url
    ], (error, stdout, stderr) => {
      if (error) {
        res.writeHead(500, {
          'Content-Type': 'text/plain',
          'Access-Control-Allow-Origin': '*'
        });
        res.end('Proxy Error: ' + error.message);
        return;
      }

      res.writeHead(200, {
        'Content-Type': 'application/json; charset=utf-8',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
      });
      res.end(stdout);
    });
  });
};
