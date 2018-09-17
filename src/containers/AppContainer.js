import { connect } from 'react-redux'
import App from '../components/App'

const mapStateToProps = state => {
  return {
    uid: state.auth.uid
  }
}

const AppContainer = connect(mapStateToProps)(App)

export default AppContainer
