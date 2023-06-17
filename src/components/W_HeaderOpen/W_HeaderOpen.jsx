import React from 'react'
import './W_HeaderOpen.scss'
import C_HeaderBurgerStack from '../C_HeaderBurgerStack/C_HeaderBurgerStack.jsx'
import C_HeaderBurgerDecoration from '../C_HeaderBurgerDecoration/C_HeaderBurgerDecoration.jsx'
export default function W_HeaderOpen() {
  return (
    <div className="W_HeaderOpen">
      <C_HeaderBurgerDecoration />
      <C_HeaderBurgerStack />
    </div>
  )
}
