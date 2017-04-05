import database from './database'
import { createChat } from './factories'

export default (memberUid1, memberUid2, idMsg) => {
  const refChat = database.ref('chats').push().key
  return database.ref('chats').child(refChat).set(createChat(memberUid1, memberUid2, idMsg))
}
