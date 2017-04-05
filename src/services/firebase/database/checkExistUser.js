import database from './database'

export default (uidUser) => {
  return database.ref().child('users').child(uidUser).once('value')
}
