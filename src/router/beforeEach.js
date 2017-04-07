import isEmpty from 'lodash.isempty'
import store from '../store'

export default (to, from, next) => {
  if (to.path === '/') {
    next()
    return
  }
  if (to.path !== '/') {
    if (isEmpty(store.state.user)) {
      next('/')
      return
    }
    next()
    return
  }
}
