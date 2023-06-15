import React, { Component } from 'react'
import './C_FooterTextSection.scss'
import A_FooterText from '../A_FooterText/A_FooterText.jsx'
import C_FooterTextColumn from '../C_FooterTextColumn/C_FooterTextColumn.jsx'
export default class C_FooterTextSection extends Component {
  render() {
    return (
      <div className="C_FooterTextSection">
        <C_FooterTextColumn></C_FooterTextColumn>
        <C_FooterTextColumn></C_FooterTextColumn>
        <C_FooterTextColumn></C_FooterTextColumn>
      </div>
    )
  }
}
