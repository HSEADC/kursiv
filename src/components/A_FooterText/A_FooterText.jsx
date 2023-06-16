import React, { useState } from 'react'
import './A_FooterText.scss'
export default function A_FooterText({ text, link, primary }) {
  return (
    <a
      className={primary ? 'A_FooterText primary' : 'A_FooterText secondary'}
      href={link}
    >
      {text}
    </a>
  )
}
