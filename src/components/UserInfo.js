import React from 'react'

class UserInfo extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log(this.props)
    return (
      <div>
        Hello! {this.props.displayName}
        <button onClick={this.props.doLogout}>ログアウト</button>
      </div>
    )
  }
}

export default UserInfo
