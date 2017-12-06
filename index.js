const http = require('http'); // default package with node.js, for building webservers
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

fs.readFile('index.html', (err, html) => {
	if(err) {
		throw err;
	}
	const server = http.createServer((req, res) => {
		res.statusCode = 200; // see documentation for http module

		res.setHeader('Content-type', 'text/html');
		res.write(html);
	});

	server.listen(port, hostname, () => {
		console.log('server started on port ' + port);
	});
});
