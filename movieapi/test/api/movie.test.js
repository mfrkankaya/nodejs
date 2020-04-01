const chai = require('chai')
const chaiHttp = require('chai-http')
const should = chai.should()
const server = require('../../app')

chai.use(chaiHttp)

let token = null

describe('/api/movies tests', () => {
  before(done => {
    chai
      .request(server)
      .post('/authenticate')
      .send({ username: 'mfurkankaya', password: '133256' })
      .end((err, res) => (token = res.body.token))
    done()
  })

  describe('(GET /) Movies', () => {
    it('It should get all movies', done => {
      chai
        .request(server)
        .get('/api/movies')
        .set('x-access-token', token)
        .end((err, res) => {
          res.should.have.status(200)
          res.body.should.be.a('object')
        })
    })
  })
})
