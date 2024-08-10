import { createServer } from 'http'

const server = createServer((req, res) => {
    res.end("hurrah!")
})

server.listen(3000, () => {
    console.log("Server is running on port 3000")
})