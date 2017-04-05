import getHasLogged from './getHasLogged'

export default () => {
  if (getHasLogged()) return true
  return false
}
