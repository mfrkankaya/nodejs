module.exports = {
  createUser: async (parent, { data: { username, password } }, { User }) => {
    const user = await User.findOne({ username })
    if (user) throw new Error('Username already exists.')
    return await new User({ username, password }).save()
  }
}
