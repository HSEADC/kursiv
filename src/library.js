import './library.css'
document.addEventListener('DOMContentLoaded', (e) => {
  document.getElementsByClassName('A_BreadCrumbs')[0].innerHTML =
    document.getElementsByClassName('A_BreadCrumbs')[0].innerHTML +
    ` · ${document.title}`
  let arrow = document.getElementsByClassName('Q_FontArrow')
  let fontSlot = document.getElementsByClassName('O_FontSlot')
  let styles = document.getElementsByClassName('M_FontTitleSubtitle')
  for (let index = 0; index < arrow.length; index++) {
    arrow[index].addEventListener('click', (e) => {
      fontSlot[index].classList.toggle('extended')
      arrow[index].classList.toggle('extended')
      styles[index].classList.toggle('extended')
    })
  }
  const menuFilterButtons = document.getElementsByClassName(
    'M_MenuFontStyleButton'
  )
  const menuExtraSettingButtons = document.getElementsByClassName(
    'A_MenuHorizontalButton'
  )
  const fonts = document.getElementsByClassName('O_FontSlot')
  const fontObject = {
    sans: ['Roboto', 'PT Sans']
  }
  console.log(fontObject.sans.length)
  for (let item of menuFilterButtons) {
    item.addEventListener('click', (e) => {
      let fontType = item.children[1].innerHTML
      if (fontType == 'Гротеск') {
        for (let fontSlots of fonts) {
          for (let i = 0; i < fontObject.sans.length; i++) {
            if (
              fontSlots.children[0].children[1].children[0].innerHTML ==
              fontObject.sans[i]
            ) {
              fontSlots.style.backgroundColor = 'yellow'
            }
          }
        }
      }
      // for (let fontSlot of fonts) {
      //   console.log(fontSlot.children[0].children[1].children[0].innerHTML)
      // }
    })
  }
  for (let item of menuExtraSettingButtons) {
    item.addEventListener('click', (e) => {
      console.log(element)
      item.classList.toggle('active')
    })
  }
})
