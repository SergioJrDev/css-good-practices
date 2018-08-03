import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { Apresentacao, Home } from './pages'
import { ComponentWithFetch } from './components'
import { fetchUsers, fetchBooks } from './services'

class AppRouter extends Component {
  state = {
    userId: 1,
  }

  // componentDidMount = () => {
  //   setInterval(() => {
  //     this.setState({
  //       userId: this.state.userId + 11
  //     })
  //   }, 3000)
  // }

  render() {
    const { userId } = this.state

    const HomeRender = () => (
      <ComponentWithFetch
        promises={[fetchUsers(userId), fetchBooks(5)]}
        component={Home} />
    )

    return(
      <Router>
        <Switch>
          <Route exact path='/apresentacao' component={Apresentacao} />
          <Route exact path='/home' component={HomeRender} />
          <Redirect to='/apresentacao' />
        </Switch>
      </Router>
    )
  }
}

export default AppRouter