import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { Apresentacao, Home } from './pages'

class AppRouter extends Component {
  render() {
    return(
      <Router>
        <Switch>
          <Route exact path='/apresentacao' component={Apresentacao} />
          <Route exact path='/home' component={Home} />
          <Redirect to='/apresentacao' />
        </Switch>
      </Router>
    )
  }
}

export default AppRouter