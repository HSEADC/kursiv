import React, { useState } from 'react'
import './C_HeaderTitleAndButton.scss'
import A_HeaderButton from '../A_HeaderButton/A_HeaderButton.jsx'
export default function C_HeaderTitleAndButton({ headerButtonTitle }) {
  return (
    <div className="C_HeaderTitleAndButton">
      <div>Тёмный режим {headerButtonTitle}</div>
      <A_HeaderButton />
    </div>
  )
}
