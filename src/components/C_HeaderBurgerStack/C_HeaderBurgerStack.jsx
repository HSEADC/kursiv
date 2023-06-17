import './C_HeaderBurgerStack.scss'
import React from 'react'
import A_HeaderBurgerButtons from '../A_HeaderBurgerButtons/A_HeaderBurgerButtons.jsx'
export default function C_HeaderBurgerStack() {
  return (
    <div className="C_HeaderBurgerStack">
      <A_HeaderLink
        href="../../index.html"
        buttonTitle="Библиотека"
      ></A_HeaderLink>
      <A_HeaderLink href="../../index.html" buttonTitle="Журнал"></A_HeaderLink>
    </div>
  )
}
