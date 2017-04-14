import database from './database'
import { createChat } from './factories'
import { returnKey } from './helpers'

export default (memberUid1, memberUid2, idMsg) => {
  const refChat = returnKey('chats')
  return {
    refChat,
    created: _ => database.ref('chats').child(refChat).set(createChat(memberUid1, memberUid2, idMsg))
  }
}
