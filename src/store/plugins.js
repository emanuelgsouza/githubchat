import { firebase } from '../services/firebase'
import { setUser, database } from '../services/firebase/database'

const initializeApp = store => {
  const dispatchAction = (data, action) => {
    if (!data.val()) return
    store.dispatch(action, data.val())
  }

  firebase.auth().onAuthStateChanged(function newUser (user) {
    if (!user) return
    setUser(user, store)
    const referenceUser = database.ref('users').child(user.uid)

    referenceUser
      .child('chats')
      .on('value', function addArgument (data) {
        dispatchAction(data, 'addDeck')
      })
  })
}
export default [ initializeApp ]
