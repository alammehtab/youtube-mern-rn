import { createServer } from 'http'

const server = createServer((req, res) => {
    res.end('Hellloo world')
})

server.listen(3000, () => {
    console.log("Sever is running/listening on port 3000.")
})
