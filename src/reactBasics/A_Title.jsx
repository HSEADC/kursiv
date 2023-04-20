import React from 'react'

export default class Greeting extends React.Component {
  render() {
    return <h1 className="A_Title"> Hello, {this.props.name}!</h1>
  }
}
