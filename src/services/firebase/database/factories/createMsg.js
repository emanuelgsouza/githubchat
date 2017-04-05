export default (text, uid) => {
  return {
    text,
    uidAuthor: uid,
    dateCreate: new Date().getTime()
  }
}
