import React, { Component } from 'react'
import { AppWrapper } from './../../styled-components'

class Home extends Component {

  render() {
    const { fetched = [] } = this.props
    return(
      <AppWrapper>
        <div className="container">
          {fetched.map((f, key) => <p key={key}>{f.id}</p>)}
        </div>
      </AppWrapper>
    )
  }
}

export default Home
