import React from 'react'
import UserInfoContainer from '../containers/UserInfoContainer'
import AuthContaienr from '../containers/AuthContainer'
import { firebaseApp } from '../firebase/'

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>{this.props.uid ? <UserInfoContainer /> : <AuthContaienr />}</div>
    )
  }
}
export default App
