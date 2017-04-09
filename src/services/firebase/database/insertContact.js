import database from './database'
import store from '../../../store'

export default (uidContact) => {
  const user = store.state.user
  if (user.contacts === undefined) {
    user.contacts = {}
  }
  user.contacts[uidContact] = uidContact

  database
    .ref('users')
    .child(user.uid)
    .set(user)
}
