import React, { Component } from 'react'
import { withRouter } from 'react-router'

class ComponentWithFetch extends Component {
  state = {
    isFetching: false,
    hasFailed: false,
    results: null,
  }

  componentDidMount = () => {
    this.fetchPromises()
  }

  fetchPromises = async () => {
    this.setState({isFetching: true})
      try {
        let results = await Promise.all(this.props.promises)
        this.setState({isFetching: false, results})
      } catch(error) {
        this.setState({isFetching: false, hasFailed: true})
      }
  }

  render() {
    const Component = this.props.component
    const { isFetching, hasFailed, results } = this.state

    const isFetching_ = (isFetching && !hasFailed && !results)
    const hasFailed_ = (!isFetching && hasFailed && !results)
    const results_ = ((!isFetching && !hasFailed && results && results.length >= 0))

    if(isFetching_) {
      return <p style={{color: '#333'}}>Carregando...</p>
    }

    if(hasFailed_) {
      return <p style={{color: '#333'}}>Ops, ocorreu um erro...</p>
    }

    if(results_) {
      return(
        <Component fetched={results} />
      )
    }

    return null
  }
}

export default withRouter(ComponentWithFetch)