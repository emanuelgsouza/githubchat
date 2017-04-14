import database from './database'

export default (memberUid1, memberUid2, chatUid, refMessage) => {
  const chat = {
    member1: memberUid1,
    member2: memberUid2,
    chatUid,
    refMessage
  }
  const updates = {}

  updates[`users/${memberUid1}/chats/${chatUid}`] = chat
  updates[`users/${memberUid2}/chats/${chatUid}`] = chat
  return database.ref().update(updates)
}
