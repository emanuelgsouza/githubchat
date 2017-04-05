import * as TYPES from './mutations_types'

export default {
  setUser (store, obj) {
    store.commit(TYPES.SET_USER, obj)
  },
  addChats (store, value) {
    store.commit(TYPES.ADD_CHATS, value)
  },
  addChatsConfig (store, value) {
    store.commit(TYPES.ADD_CHATS_CONFIG, value)
  },
  hasLogged (store, value) {
    store.commit(TYPES.HAS_LOGGED, value)
  }
}
