const fs = require('fs')

/* ------------------------------- Write File ------------------------------- */

// fs.appendFile() -> Adds new data to existing one
// fs.writeFile() -> Removes old content and writes new one

fs.appendFile('demo.txt', 'new content', err => {
  if (err) throw err

  console.log('content added')
})

fs.writeFile('demo.txt', 'new content', err => {
  if (err) throw err

  console.log('content added')
})

/* -------------------------------- Read File ------------------------------- */

fs.readFile('demo.txt', (err, data) => {
  if (err) console.error(err)
  console.log(data.toString())
})

const demo = fs.readFileSync('demo.txt')
console.log(demo.toString())

/* ------------------------------- Remove File ------------------------------ */

fs.unlink('demo.txt', err => {
  if (err) throw err

  console.log('File removed.')
})
