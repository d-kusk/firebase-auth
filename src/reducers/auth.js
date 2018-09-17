import { LOGIN_OK, LOGOUT } from '../actions/auth'

const initialState = {
  uid: null,
  diaplayName: null,
  photo: null,
  email: null
}

const auth = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_OK: {
      return Object.assign({}, state, {
        uid: action.payload.uid,
        displayName: action.payload.displayName,
        photo: action.payload.photo,
        email: action.payload.email
      })
    }

    case LOGOUT: {
      return Object.assign({}, state, initialState)
    }

    default: {
      return state
    }
  }
}

export default auth
