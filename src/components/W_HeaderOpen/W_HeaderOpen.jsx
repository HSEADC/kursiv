import React from 'react'
import './W_HeaderOpen.scss'
import C_HeaderBurgerStack from '../C_HeaderBurgerStack/C_HeaderBurgerStack.jsx'
import C_HeaderTitleAndButton from '../C_HeaderTitleAndButton/C_HeaderTitleAndButton.jsx'
export default function W_HeaderOpen() {
  return (
    <div className="W_HeaderOpen">
      <C_HeaderLinks />
      <C_HeaderLinks />
    </div>
  )
}
