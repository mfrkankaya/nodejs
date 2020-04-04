module.exports = {
  createSnap: async (parent, { data: { userId, text } }, { Snap }) => await new Snap({ userId, text }).save()
}
