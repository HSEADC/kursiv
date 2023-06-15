// import './A_HeaderButton.scss'
// import React from 'react'
// import { useState } from 'react'
// export default function A_HeaderButton() {
//   const [isActive, setIsActive] = useState(false)
//   const handleClick = () => {
//     console.warn('hi')
//     setIsActive((current) => !current)
//     console.log(!isActive)
//   }
//   return (
//     <div
//       className={`A_HeaderButton ${isActive ? 'isActive' : ''}`}
//       onClick={handleClick}
//     >
//       <div className="Q_Circle"></div>
//     </div>
//   )
// }
import './A_HeaderButton.scss'
import React from 'react'
import classnames from 'classnames'
export default class A_HeaderButton extends React.Component {
  render() {
    let { isActive } = this.props
    const handleClick = () => {
      console.log(isActive)
      isActive = !isActive
    }
    const classes = classnames({
      A_HeaderButton: true,
      Active: isActive
    })
    return (
      <div className={classes} onClick={handleClick}>
        <div className="Q_Circle"></div>
      </div>
    )
  }
}
