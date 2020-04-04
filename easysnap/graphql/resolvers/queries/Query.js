const Query = {
  user: async (parent, args, { User }) => await User.findById(args.id),
  users: async (parent, args, { User }) => await User.find({}).sort({ createdAt: 'desc' })
}

module.exports = Query
