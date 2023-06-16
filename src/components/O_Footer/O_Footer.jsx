import './O_Footer.scss'
import React from 'react'
import C_FooterTextSection from '../C_FooterTextSection/C_FooterTextSection.jsx'
import W_FooterDecoration from '../W_FooterDecoration/W_FooterDecoration.jsx'
export default function O_Footer() {
  return (
    <div className="O_Footer">
      <C_FooterTextSection />
      <W_FooterDecoration />
    </div>
  )
}
