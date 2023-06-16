import React, { Component } from 'react'
import './Q_SplashBackground.scss'
export default class Q_SplashBackground extends Component {
  render() {
    const { type, splashBackground } = this.props
    if (type == 'color') {
      return <div />
    } else if (type == 'image') {
      return <img src={splashBackground} />
    }
  }
}
