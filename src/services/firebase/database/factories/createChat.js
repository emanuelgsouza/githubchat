export default function (member1, member2, chat) {
  return {
    members: {
      'member1': {
        uid: member1,
        writing: false
      },
      'member2': {
        uid: member2,
        writing: false
      }
    },
    chat
  }
}
