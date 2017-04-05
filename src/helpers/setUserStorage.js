export default obj => {
  window.localStorage.setItem('user', JSON.stringify(obj))
}
