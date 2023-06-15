import React, { Component } from 'react'
import './A_FooterText.scss'
export default class A_FooterText extends Component {
  render() {
    return (
      <div className="A_FooterText">
        <p>{this.props.text} →</p>
      </div>
    )
  }
}
