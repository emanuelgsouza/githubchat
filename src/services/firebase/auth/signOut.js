import firebase from '../firebase.js'
import { removeUser, setHasLogged } from '../../../helpers'
import store from '../../../store'
import router from '../../../router'

export default function () {
  firebase
    .auth()
    .signOut()
    .then(function () {
      store.commit('SET_USER', {})
      store.commit('ADD_CHATS', {})
      store.commit('ADD_CHATS_CONFIG', {})
      router.push('/home')
      removeUser()
      setHasLogged(false)
    })
    .catch(function () {
      console.log('erro')
    })
}
