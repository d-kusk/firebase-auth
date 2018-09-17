import React from 'react'

class UserInfo extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        Hello! {this.props.displayName}
        <div style={{ width: '200px' }}>
          <img style={{ width: '100%' }} src={this.props.photo} alt="" />
        </div>
        <button onClick={this.props.doLogout}>ログアウト</button>
      </div>
    )
  }
}

export default UserInfo
