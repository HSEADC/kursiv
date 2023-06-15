import './A_SplashTitle.scss'
import React from 'react'

export default class A_SplashTitle extends React.Component {
  render() {
    const { fontTitle } = this.props
    return <div className="A_SplashTitle">{fontTitle}</div>
  }
}
