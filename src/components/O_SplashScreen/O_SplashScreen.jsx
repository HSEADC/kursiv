import React, { Component } from 'react'
import './O_SplashScreen.scss'
import A_SplashTitle from '../A_SplashTitle/A_SplashTitle.jsx'
import Q_SplashBackground from '../Q_SplashBackground/Q_SplashBackground.jsx'
export default function O_Schedule({ fontTitle }) {
  return (
    <div className="O_SplashScreen">
      <A_SplashTitle fontTitle={fontTitle} />
      <Q_SplashBackground isImage={true} />
    </div>
  )
}
