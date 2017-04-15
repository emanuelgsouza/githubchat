import database from './database'

export default (chat, uid) => {
  return database.ref('users').child(uid).child('chats').child(chat).remove()
}
