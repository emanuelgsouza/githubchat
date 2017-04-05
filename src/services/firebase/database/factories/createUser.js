export default (user, created) => {
  return {
    name: user.displayName,
    uid: user.uid,
    photo: user.photoURL,
    email: user.email,
    created,
    chats: {}
  }
}
