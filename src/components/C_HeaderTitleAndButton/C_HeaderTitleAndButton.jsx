import React, { Component } from 'react'
import './C_HeaderTitleAndButton.scss'
import A_HeaderButton from '../A_HeaderButton/A_HeaderButton.jsx'
export default class C_HeaderTitleAndButton extends Component {
  render() {
    const { headerButtonTitle } = this.props
    return (
      <div className="C_HeaderTitleAndButton">
        <div>Тёмный режим {headerButtonTitle}</div>
        <A_HeaderButton />
      </div>
    )
  }
}
