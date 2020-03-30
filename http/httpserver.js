const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'content-type': 'text/html; charset=utf8' })
  fs.readFile('index.html', (err, data) => {
    if (err) throw err
    res.end(data)
  })
})

server.listen(3000)
