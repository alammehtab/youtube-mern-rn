// express use krne se pehle install krlena usay
import express from 'express'

const PORT = 3000
const server = express()

server.get('/', (req, res) => {
    res.json({ message: 'Helloooo, world!' })
})

server.listen(PORT, () => {
    console.log(`Server is listening here: http://localhost:${PORT}`)
})
