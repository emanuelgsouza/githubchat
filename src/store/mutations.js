import * as TYPES from './mutations_types'

export default {
  [ TYPES.SET_USER ] (store, obj) {
    store.user = obj
  },
  [ TYPES.ADD_CHATS_CONFIG ] (store, obj) {
    store.chats_config = obj
  },
  [ TYPES.ADD_ARGUMENTS_USER ] (store, obj) {
    store.chats = obj
  },
  [ TYPES.HAS_LOGGED ] (store, state) {
    store.hasLogged = state
  }
}
