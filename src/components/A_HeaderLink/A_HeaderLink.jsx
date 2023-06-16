import './A_HeaderLink.scss'
import React from 'react'

export default class A_HeaderLink extends React.Component {
  render() {
    const { buttonTitle, href } = this.props
    return (
      <a href={href} className="A_HeaderLink">
        {buttonTitle}
      </a>
    )
  }
}
