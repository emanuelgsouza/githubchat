export default logged => {
  if (logged) {
    window.localStorage.setItem('isLogged', true)
    return
  }
  window.localStorage.setItem('isLogged', false)
}
