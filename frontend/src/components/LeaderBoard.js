import React from 'react'
import axios from 'axios'

class LeaderBoard extends React.Component {
  constructor() {
    super()
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    axios.get('/api/users')
      .then(res => this.setState({ users: res.data }))
  }

  render() {
    if (!this.state.users) return null
    const arrayOfUsers = this.state.users
    arrayOfUsers.sort((a, b) => (a.score.right < b.score.right) ? 1 : -1)
    return <div className="flex-container">
      <h1>Ranking</h1>
      <div className="ranking-list">
        <ol>
          {arrayOfUsers.map((user, i) => {
            return <li key={i}>
              {user.username}: {user.score.right}
            </li>
          })}
        </ol>
      </div>
    </div>
  }
}

export default LeaderBoard