import { createServer } from 'node:http'
const PORT = 3000

const myServer = createServer((req, res) => {
    const url = req.url;

    if (url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('This is the Home Page.');
    } else if (url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('This is the About Page.');
    } else if (url === '/contact') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Contact us at contact@example.com.');
    } else {
        // res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
    }
})

myServer.listen(PORT, () => {
    console.log(`Server is listening here -> http://localhost:${PORT}`)
})