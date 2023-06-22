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
  constructor(props) {
    super(props)
    this.reset()
  }
  reset() {
    this.state = {
      inputValue: ''
    }
  }
  render() {
    let endOf = 'le.com/'
    let inputValue = document.querySelector('.A_HeaderButton')
    let { isActive } = this.props
    const handleClick = () => {
      console.log(window.location.href)
      isActive = !isActive
    }
    const handleEnter = () => {
      console.log('https://www.app' + endOf)
      window.location.href =
        'https://kursiv.adc.ac/search.html?request=' + this.state.inputValue

      isActive = !isActive
    }
    const classes = classnames({
      A_HeaderButton: true,
      Active: isActive
    })

    return (
      <>
        <input
          className={classes}
          onClick={handleClick}
          onKeyDown={(e) => e.key === 'Enter' && handleEnter()}
          placeholder="Поиск по странице"
          value={this.state.inputValue}
          onChange={(evt) => this.updateInputValue(evt)}
        ></input>
        <img src="https://kursiv.adc.ac/share/searchIcon.svg.jpg"></img>
      </>
    )
  }
  updateInputValue(evt) {
    const val = evt.target.value
    // ...
    this.setState({
      inputValue: val
    })
  }
}
