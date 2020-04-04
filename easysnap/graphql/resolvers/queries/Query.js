const Query = {
  user: async (parent, args, { User }) => await User.findById(args.id)
}

module.exports = Query
