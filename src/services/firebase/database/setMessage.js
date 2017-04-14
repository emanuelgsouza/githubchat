import database from './database'
import { createMsg } from './factories'
import { returnKey } from './helpers'

export default (text, uid, keyChat) => {
  const refMsg = database.ref('messages').child(keyChat)
  const keyMsg = returnKey('messages', keyChat)
  return refMsg.child('msgs').child(keyMsg).set(createMsg(text, uid))
}
