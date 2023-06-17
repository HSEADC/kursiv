import './W_FooterDecoration.scss'
import React, { useState } from 'react'
import C_FooterDecorationIconAndText from '../C_FooterDecorationIconAndText/C_FooterDecorationIconAndText.jsx'
export default function W_FooterDecoration() {
  return (
    <div className="W_FooterDecoration">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/1920px-SNice.svg.png"
        alt=""
      />
      <C_FooterDecorationIconAndText />
    </div>
  )
}
