import React, { Component } from 'react'
import A_Title from './A_Title.jsx'
import M_Card from './M_Card.jsx'
import O_SplashScreen from '../components/O_SplashScreen/O_SplashScreen.jsx'
export default class O_Schedule extends Component {
  render() {
    const { events, mainTitle, fontTitle, splashBackground } = this.props
    const cards = events.map((event, i) => {
      return <M_Card title={event.title} date={event.date} key={i} />
    })
    return (
      <div className="O_Schedule">
        <O_SplashScreen
          fontTitle={fontTitle}
          splashBackground={splashBackground}
        />
        <A_Title mainTitle={mainTitle} />
        {cards}
      </div>
    )
  }
}
