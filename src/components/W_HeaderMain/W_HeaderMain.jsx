import React, { useState } from 'react'
import './W_HeaderMain.scss'
import C_HeaderLinks from '../С_HeaderLinks/С_HeaderLinks.jsx'
import C_LogoAndDescription from '../C_LogoAndDescription/C_LogoAndDescription.jsx'
import C_HeaderTitleAndButton from '../C_HeaderTitleAndButton/C_HeaderTitleAndButton.jsx'
import C_BurgerMenu from '../C_BurgerMenu/C_BurgerMenu.jsx'
export default function W_HeaderMain({ active, onClick }) {
  return (
    <div className="W_HeaderMain">
      <C_LogoAndDescription />
      <C_HeaderLinks />
      <C_HeaderTitleAndButton />
      <C_BurgerMenu active={active} onClick={onClick}></C_BurgerMenu>
    </div>
  )
}
