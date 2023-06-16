import './C_HeaderLinks.scss'
import React from 'react'
import A_HeaderLink from '../A_HeaderLink/A_HeaderLink.jsx'
export default class C_HeaderLinks extends React.Component {
  render() {
    return (
      <div className="C_HeaderLinks">
        <A_HeaderLink
          href="../../index.html"
          buttonTitle="Библиотека"
        ></A_HeaderLink>
        <A_HeaderLink
          href="../../index.html"
          buttonTitle="Журнал"
        ></A_HeaderLink>
      </div>
    )
  }
}
