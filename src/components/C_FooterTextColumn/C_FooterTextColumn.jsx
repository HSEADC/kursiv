import React, { Component } from 'react'
import './C_FooterTextColumn.scss'
import A_FooterText from '../A_FooterText/A_FooterText.jsx'
export default class C_FooterTextColumn extends Component {
  render() {
    return (
      <div className="C_FooterTextColumn">
        <A_FooterText text="Privet" />
        <A_FooterText text="Poka" />
        <A_FooterText text="Privet" />
      </div>
    )
  }
}
