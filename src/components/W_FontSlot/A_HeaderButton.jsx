import './A_HeaderButton.scss'
import React, { useState } from 'react'

export const W_FontSlot = ({
  fontTitle,
  stylesCount,
  isVariable,
  previewText
}) => {
  let [count, setStateValue] = useState(
    'Пуговицы все три застегнулись не успел'
  )
  return (
    <div>
      <p>{fontTitle}</p>
      <p>{stylesCount > 0 ? `Кол-во стилей: ${stylesCount}` : ''}</p>
      {boolean(isVariable) && <p>isVariable</p>}
      <a>{previewText}</a>
    </div>
  )
}
