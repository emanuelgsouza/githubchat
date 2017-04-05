import database from './database'
import { createMsg } from './factories'

export default (text, uid, uidMsg) => {
	const refMsg = database.ref('messages').child(uidMsg)
	const idMsg = refMsg.push().key
	return refMsg.chil(idMsg).set(createMsg(text, uid))
}