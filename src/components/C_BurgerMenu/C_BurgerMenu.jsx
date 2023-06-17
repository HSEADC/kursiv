import React, { useState } from 'react'
import './C_BurgerMenu.scss'
export default function C_BurgerMenu({ onClick, active }) {
  return (
    <div
      className={active ? 'C_BurgerMenu active' : 'C_BurgerMenu'}
      onClick={onClick}
    >
      <span className="A_Menu"></span>
    </div>
  )
}
