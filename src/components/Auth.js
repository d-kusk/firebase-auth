import React from 'react'

class Auth extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.refLogin()
  }

  render() {
    return (
      <div>
        <button type="button" onClick={this.props.doLogin}>
          ログイン
        </button>
      </div>
    )
  }
}

export default Auth
