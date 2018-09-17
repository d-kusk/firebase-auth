const LOGIN_OK = 'LOGIN_OK'
const LOGOUT = 'LOGOUT'

export { LOGIN_OK, LOGOUT }

export const loginOk = user => {
  console.log('user', user)

  return {
    type: LOGIN_OK,
    payload: {
      displayName: user.displayName,
      photo: user.photoURL,
      email: user.email,
      uid: user.uid
    }
  }
}

export const logOut = () => {
  return {
    type: LOGOUT
  }
}
