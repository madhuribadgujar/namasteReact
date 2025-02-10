import React from 'react'
import { data } from 'react-router'
class UserClass extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userInfo: {
        name: 'test',
        location: 'default loc'
      }
    }
  }
  async componentDidMount() {
    const response = await fetch('https://api.github.com/users/madhubadgujar')
    const json = await response.json()
    this.setState({
      userInfo: json
    })
  }

  render() {
    return (
      <div className="user-cart">
        <h1>Name: {this.state.userInfo.name}</h1>
        <h2>Location: {this.state.userInfo.location}</h2>
        <h3>
          Photo:<img src={this.state.userInfo.avatar_url}></img>
        </h3>
        <h3>Contact: @madhubadgujar</h3>
      </div>
    )
  }
}
export default UserClass
