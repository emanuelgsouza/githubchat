import database from './database'
import { createMsg } from './factories'
import { returnKey } from './helpers'

export default (text, uid) => {
  const keyChat = returnKey('messages')
  const refMsg = database.ref('messages').child(keyChat)
  const keyMsg = returnKey('messages', keyChat)
  return {
    keyChat,
    created: _ => refMsg.child('msgs').child(keyMsg).set(createMsg(text, uid))
  }
}
