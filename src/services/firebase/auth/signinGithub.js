import firebase from '../firebase.js'

export default function () {
  const provider = new firebase.auth.GithubAuthProvider()
  firebase.auth().signInWithRedirect(provider)
}
