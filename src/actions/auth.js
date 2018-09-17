export const LOGIN_OK = 'LOGIN_OK'
export const LOGOUT = 'LOGOUT'

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
