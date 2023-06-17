import React, { useState } from 'react'
import './O_Header.scss'
import W_HeaderMain from '../W_HeaderMain/W_HeaderMain.jsx'
import W_HeaderOpen from '../W_HeaderOpen/W_HeaderOpen.jsx'
export default function O_Header() {
  const [active, setActive] = useState(false)
  function handleClick() {
    setActive((active) => !active)
  }
  return (
    <div className={active ? 'O_Header active' : 'O_Header'}>
      <W_HeaderMain active={active} onClick={handleClick} />
      <W_HeaderOpen />
    </div>
  )
}
