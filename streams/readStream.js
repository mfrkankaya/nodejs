const fs = require('fs')
const file = 'video.mp4'

const readStream = fs.createReadStream(file)

fs.stat(file, (err, data) => {
  let progress = 0
  const total = data.size
  console.log('Total bytes: ', total)

  readStream.on('data', chunk => {
    progress += chunk.length
    console.log(`${Math.round((100 * progress) / total)}%`)
  })

  readStream.on('end', () => {
    console.log('Reading has finished.')
    console.log(progress)
  })
})
