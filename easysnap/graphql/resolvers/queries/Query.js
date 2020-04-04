const Query = {
  snap: async (parent, args, { Snap }) => await Snap.findById(args.id),
  snaps: async (parent, args, { Snap }) => await Snap.find({}).sort({ createdAt: 'desc' }),
  user: async (parent, args, { User }) => await User.findById(args.id),
  users: async (parent, args, { User }) => await User.find({}).sort({ createdAt: 'desc' })
}

module.exports = Query
