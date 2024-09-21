const static = require('node-static');
const http = require('http');

// Create a new node-static server to serve files from the 'public' directory
const fileServer = new static.Server('docs');

// Create an HTTP server
http.createServer(function (req, res) {
    req.addListener('end', function () {
        // Serve files
        fileServer.serve(req, res);
    }).resume();
}).listen(8080, () => {
    console.log('Server running on http://localhost:8080');
});
