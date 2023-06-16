import React, { Component } from 'react'
import './C_HeaderSwitch.scss'
// export default class C_HeaderSwitch extends Component {
//   render() {
//     return <div className="C_HeaderSwitch"></div>
//   }
// }
export const C_HeaderSwitch = ({ isActive }) => {
  const [isActive, setIsActive] = useState(false)
  const handleClick = () => {
    console.warn('hi')
    setIsActive((current) => !current)
  }
  return (
    <div
      className={isActive ? 'C_HeaderSwitch' : ''}
      onClick={handleClick}
    ></div>
  )
}
