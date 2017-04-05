import { isLogged } from '../helpers'
import store from '../store'

const needAuth = to => to.meta.requireAuth

export default (to, from, next) => {
  if (to.path === '/create-theme') {
    if (store.state.user.isSubscriber) {
      next()
      return
    }
    next('/')
    return
  }
  if (!needAuth(to)) {
    next()
    return
  }
  if (needAuth(to) && isLogged()) {
    next()
    return
  }
  next('/home')
  return
}
