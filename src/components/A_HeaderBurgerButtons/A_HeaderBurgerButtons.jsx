import './A_HeaderBurgerButtons.scss'
import React from 'react'

export default function A_HeaderBurgerButtons({ href, buttonTitle }) {
  return (
    <a href={href} className="A_HeaderBurgerButtons">
      {buttonTitle}
    </a>
  )
}
