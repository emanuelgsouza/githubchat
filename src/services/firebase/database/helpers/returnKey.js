import database from '../database'

export default (ref, child) => {
  if (!child) return database.ref(ref).push().key
  return database.ref(ref).child(child).push().key
}
