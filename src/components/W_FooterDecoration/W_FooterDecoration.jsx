import './W_FooterDecoration.scss'
import React, { useState } from 'react'
import C_FooterDecorationIconAndText from '../C_FooterDecorationIconAndText/C_FooterDecorationIconAndText.jsx'
export default function W_FooterDecoration() {
  return (
    <div className="W_FooterDecoration">
      <img src=".././src/images/A_FooterAA.svg" alt="" />
      <C_FooterDecorationIconAndText />
    </div>
  )
}
