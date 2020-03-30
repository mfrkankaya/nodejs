const events = require('events')
const eventEmitter = new events.EventEmitter()

eventEmitter.on('greet', ({ name, surname }) => {
  console.log(`Hey ${name} ${surname}!`)
})

eventEmitter.emit('greet', { name: 'Furkan', surname: 'Kaya' })

// Once works only once
eventEmitter.once('greet-2', ({ name, surname }) => {
  console.log(`Hey ${name} ${surname}!`)
})

eventEmitter.emit('greet-2', { name: 'Furkan', surname: 'Kaya' })
eventEmitter.emit('greet-2', { name: 'Furkan', surname: 'Kaya' }) // This wont show up