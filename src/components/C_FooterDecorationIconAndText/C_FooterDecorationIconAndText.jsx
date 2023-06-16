import React from 'react'
import './C_FooterDecorationIconAndText.scss'
import A_FooterText from '../A_FooterText/A_FooterText.jsx'

export default function C_FooterDecorationIconAndText({ text, link, primary }) {
  return (
    <div className="C_FooterDecorationIconAndText">
      <img src="" alt="" />
      <A_FooterText text="hse adc →" />
      <A_FooterText text="2022-2023" primary={true} />
    </div>
  )
}
