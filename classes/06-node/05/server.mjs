import { createServer } from 'node:http'

const PORT = 3000

const server = createServer((req, res) => {
    // picking up stuff from req object
    // console.log({ method: req.method, url: req.url })

    // destructure stuff from req
    const { method, url } = req;
    const parsedUrl = new URL(url, `http://${req.headers.host}`);

    // Set response header to JSON
    res.setHeader('Content-Type', 'application/json');

    if (method === 'GET' && parsedUrl.pathname === '/api/items') {
        res.statusCode = 200;
        res.end(JSON.stringify({ message: 'GET request - Fetching all items' }));

        // POST Request
    } else if (method === 'POST' && parsedUrl.pathname === '/api/items') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            const newItem = JSON.parse(body);
            res.statusCode = 201; //created
            res.end(JSON.stringify({ message: `POST request - Adding new item`, data: newItem }));
        });
        // PUT Request
    } else if (method === 'PUT' && parsedUrl.pathname.startsWith('/api/items/')) {
        let body = '';
        const itemId = parsedUrl.pathname.split('/').pop();

        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            const updatedItem = JSON.parse(body);
            res.statusCode = 200;
            res.end(JSON.stringify({ message: `PUT request - Updating item ${itemId}`, data: updatedItem }));
        });

        // DELETE Request
    } else if (method === 'DELETE' && parsedUrl.pathname.startsWith('/api/items/')) {
        const itemId = parsedUrl.pathname.split('/').pop();
        res.statusCode = 200;
        res.end(JSON.stringify({ message: `DELETE request - Deleting item ${itemId}` }));

        // Handle 404 Not Found
    } else {
        res.statusCode = 404;
        res.end(JSON.stringify({ message: 'Route not found' }));
    }
})

server.listen(PORT, () => console.log(`Server is listening here: http://localhost:${PORT}`))