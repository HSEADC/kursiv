import React from 'react'
import './C_FooterDecorationIconAndText.scss'
import A_FooterText from '../A_FooterText/A_FooterText.jsx'

export default function C_FooterDecorationIconAndText({ text, link, primary }) {
  return (
    <div className="C_FooterDecorationIconAndText">
      <img src="https://kursiv.adc.ac/share/A_FooterStar.svg" alt="" />
      <div>
        <A_FooterText
          text="hse adc →"
          link="https://portfolio.hse.ru/Project/177233"
        />
        <A_FooterText text="2022-2023" primary={true} />
      </div>
    </div>
  )
}
