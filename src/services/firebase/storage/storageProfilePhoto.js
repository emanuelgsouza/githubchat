import firebase from '../firebase'

const storage = firebase.storage()
const ref = storage.ref('users')

export default (uid, file) => {
  return ref.child(`${uid}.${file.type}`).put(file, { contentType: file.type })
}
