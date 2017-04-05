import database from './database'
import checkExistUser from './checkExistUser'
import createUser from './factories'
import { setUserStorage, setHasLogged } from '../../../helpers'
import store from '../../../store'

const setUser = user => {
  const created = new Date().getTime()
  database
    .ref(`users/${usuario.uid}`)
    .set(createUser(user, created))
    .then(() => {
      store.dispatch('setUser', usuario)
      setHasLogged(true)
      console.log('User insert in database success and storage in localStorage')
    })
}

export default (user, store) => {
  checkExistUser(user.uid)
    .then(data => {
      if (data.val()) {
        database
          .ref()
          .child('users')
          .child(user.uid)
          .on('value', function (data) {
            store.dispatch('setUser', data.val())
            setUserStorage(data.val())
            setHasLogged(true)
            console.log('User storage in localStorage')
          })
        return
      }
      setUser(user)
    })
}
