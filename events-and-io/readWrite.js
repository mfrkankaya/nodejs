const fs = require('fs')

fs.readFile('demo.txt', (err, data) => {
  if (err) console.error(err)
  console.log(data.toString())
})

const demo = fs.readFileSync('demo.txt')
console.log(demo.toString())
