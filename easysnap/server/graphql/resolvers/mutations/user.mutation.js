const bcrypt = require('bcrypt')
const token = require('../../../helpers/token')

module.exports = {
  createUser: async (parent, { data: { username, password } }, { User }) => {
    const user = await User.findOne({ username })
    if (user) throw new Error('Username already exists.')

    const newUser = await new User({ username, password }).save()
    return { token: token.generate({ user: newUser, expiresIn: '24' }) }
  },

  signIn: async (parent, { data: { username, password } }, { User }) => {
    const user = await User.findOne({ username })
    if (!user) throw new Error('User does not exists.')

    const validPasword = await bcrypt.compare(password, user.password)
    if (!validPasword) throw new Error('Wrong password.')

    return { token: token.generate({ username, expiresIn: '24' }) }
  }
}
