const http = require('http')
const fs = require('fs')

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { 'content-type': 'text/html; charset=utf8' })
//   fs.readFile('index.html', (err, data) => {
//     if (err) throw err
//     res.end(data)
//   })
// })

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'content-type': 'text/html; charset=utf8' })
  if (req.method === 'GET') {
    if (req.url === '/') res.write("You're home.")
    else if (req.url === '/contact') res.write("Here's contact.")
    else res.write('Not found.')
  }

  res.end()
})

server.listen(3000)
