import React, { Component } from 'react'
import './O_SplashScreen.scss'
import A_SplashTitle from '../A_SplashTitle/A_SplashTitle.jsx'
import Q_SplashBackground from '../Q_SplashBackground/Q_SplashBackground.jsx'
export default class O_Schedule extends Component {
  render() {
    const { fontTitle, splashBackground, type } = this.props
    return (
      <div className="O_SplashScreen">
        <Q_SplashBackground splashBackground={splashBackground} type={type} />
        <A_SplashTitle fontTitle={fontTitle} />
      </div>
    )
  }
}
