import React from 'react'
import A_Title from './A_Title.jsx'
export default class M_Title extends React.Component {
  render() {
    const { date, title } = this.props
    return (
      <div className="M_Card">
        <A_Title text={title}></A_Title>
        <p>{date}</p>
      </div>
    )
  }
}
