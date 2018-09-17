import firebase from 'firebase'
import { connect } from 'react-redux'
import UserInfo from '../components/UserInfo'
import { logOut } from '../actions/auth'

const mapStateToProps = state => {
  return {
    uid: state.auth.uid,
    displayName: state.auth.displayName
  }
}

const mapDispatchToProps = dispatch => {
  return {
    doLogout: () => {
      firebase.auth().signOut()
      dispatch(logOut())
    }
  }
}

const UserInfoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserInfo)

export default UserInfoContainer
