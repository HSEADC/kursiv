import React, { useState } from 'react'
import './O_Header.scss'
import C_HeaderLinks from '../С_HeaderLinks/С_HeaderLinks.jsx'
import C_LogoAndDescription from '../C_LogoAndDescription/C_LogoAndDescription.jsx'
import C_HeaderTitleAndButton from '../C_HeaderTitleAndButton/C_HeaderTitleAndButton.jsx'
export default function O_Header() {
  return (
    <div className="O_Header">
      <C_LogoAndDescription />
      <C_HeaderLinks />
      <C_HeaderTitleAndButton />
    </div>
  )
}
