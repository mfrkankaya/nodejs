const http = require('http')

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'content-type': 'text/html; charset=utf8' })
  res.write('<b>Merhaba</b> dünya.')
  res.end()
})

server.listen(3000)
