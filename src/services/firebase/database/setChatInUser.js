import database from './database'

export default (uid, chat) => database.ref('users').child(uid).child('chats').child(chat).set(chat)
