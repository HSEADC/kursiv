import './library.css'
document.addEventListener('DOMContentLoaded', (e) => {
  document.getElementsByClassName('A_BreadCrumbs')[0].innerHTML =
    document.getElementsByClassName('A_BreadCrumbs')[0].innerHTML +
    ` · ${document.title}`
  let arrow = document.getElementsByClassName('Q_FontArrow')
  let fontSlot = document.getElementsByClassName('O_FontSlot')
  let styles = document.getElementsByClassName('M_FontTitleSubtitle')
  const menuFilterButtons = document.getElementsByClassName(
    'M_MenuFontStyleButton'
  )
  const menuExtraSettingButtons = document.getElementsByClassName(
    'A_MenuHorizontalButton'
  )
  let fonts = document.getElementsByClassName('O_FontSlot')

  for (let index = 0; index < arrow.length; index++) {
    arrow[index].addEventListener('click', (e) => {
      fontSlot[index].classList.toggle('extended')
      arrow[index].classList.toggle('extended')
      styles[index].classList.toggle('extended')
    })
  }
  function buildObjectWithFilteredFonts(object) {
    let wrapperObject = {}
    for (let fontStyle of object) {
      if (fontStyle.dataset.fontstyle in wrapperObject) {
        let wow = wrapperObject[fontStyle.dataset.fontstyle]
        wow.push(fontStyle)
      } else {
        wrapperObject[fontStyle.dataset.fontstyle] = [fontStyle]
      }
    }
    return wrapperObject
  }
  function resetStates(subject, params) {
    for (let i = 0; i < subject.length; i++) {
      subject[i].classList.remove(params)
    }
  }

  buildObjectWithFilteredFonts(fonts)
  for (let i = 0; i < fonts.length; i++) {
    // console.log(fonts[i])
    // console.log(fonts[i].dataset.fontStyle)
  }
  function iterateThroughArrayAndSetClassToAllItemsIfNotMatchingUpWithTrigger(
    trigger,
    array,
    parameter
  ) {
    for (let i = 0; i < Object.keys(array).length; i++) {
      if (Object.keys(array)[i] != trigger.dataset.filterparameter) {
        console.log(Object.keys(array)[i])
        for (let j = 0; j < array[Object.keys(array)[i]].length; j++) {
          console.log(array[Object.keys(array)[i]][j])
          array[Object.keys(array)[i]][j].classList.add('hidden')
        }
      }
    }
  }
  for (let button of menuFilterButtons) {
    button.addEventListener('click', (e) => {
      resetStates(menuFilterButtons, 'active')
      resetStates(fonts, 'hidden')
      button.classList.add('active')
      iterateThroughArrayAndSetClassToAllItemsIfNotMatchingUpWithTrigger(
        button,
        buildObjectWithFilteredFonts(fonts),
        'hi'
      )
    })
  }
})
