import React, { Component } from 'react'
import './C_FooterTextColumn.scss'
import A_FooterText from '../A_FooterText/A_FooterText.jsx'
export default function C_FooterTextColumn({
  title,
  firstLink,
  firstHref,
  secondLink,
  secondHref,
  thirdLink,
  thirdHref
}) {
  return (
    <div className="C_FooterTextColumn">
      {Boolean(title) && <A_FooterText text={title} primary={true} />}
      {Boolean(firstLink) && <A_FooterText text={firstLink} link={firstHref} />}
      {Boolean(secondLink) && (
        <A_FooterText text={secondLink} link={secondHref} />
      )}
      {Boolean(thirdLink) && <A_FooterText text={thirdLink} link={thirdHref} />}
    </div>
  )
}
