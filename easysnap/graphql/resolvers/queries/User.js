const User = {
  snaps: async (parent, args, { Snap }) => await Snap.find({ userId: parent._id })
}

module.exports = User
