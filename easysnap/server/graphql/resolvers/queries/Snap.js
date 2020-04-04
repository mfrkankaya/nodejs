const Snap = {
  user: async (parent, args, { User }) => await User.findById(parent.userId),
}

module.exports = Snap
