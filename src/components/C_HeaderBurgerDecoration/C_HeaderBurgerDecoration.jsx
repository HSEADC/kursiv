import './C_HeaderBurgerDecoration.scss'
import React from 'react'
import A_FooterText from '../A_FooterText/A_FooterText.jsx'
export default function C_HeaderBurgerDecoration(imageSource) {
  return (
    <div className="C_HeaderBurgerDecoration">
      <img src="https://kursiv.adc.ac/share/Q_HeaderSoloA.svg" alt="" />
      <A_FooterText text="2022-2023" primary={true} />
    </div>
  )
}
