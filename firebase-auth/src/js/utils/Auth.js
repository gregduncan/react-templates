module.exports = {

  setToken(id) {
    localStorage.token = id
  },

  getToken() {
    return localStorage.token
  },

  logout() {
    delete localStorage.token
  },

  loggedIn() {
    return !!localStorage.token
  },
}
