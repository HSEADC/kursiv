import './library.css'
document.addEventListener('DOMContentLoaded', (e) => {
  let arrow = document.getElementsByClassName('Q_FontArrow')
  let fontSlot = document.getElementsByClassName('O_FontSlot')
  let styles = document.getElementsByClassName('M_FontTitleSubtitle')
  const menuFilterButtons = document.getElementsByClassName(
    'M_MenuFontStyleButton'
  )
  const menuExtraSettingButtons = document.querySelectorAll(
    '.A_MenuHorizontalButton'
  )
  let fonts = document.getElementsByClassName('O_FontSlot')
  for (let i = 0; i < fontSlot.length; i++) {
    let fontName = fontSlot[i].dataset.name
    fontSlot[i].children[1].style.fontFamily = `${fontName}`
  }
  for (let index = 0; index < arrow.length; index++) {
    arrow[index].addEventListener('click', (e) => {
      fontSlot[index].classList.toggle('extended')
      arrow[index].classList.toggle('extended')
      styles[index].classList.toggle('extended')
    })
  }
  // function breadCrumbsDocumentTitleSet() {
  //   document.getElementsByClassName(
  //     'A_BreadCrumbs'
  //   )[0].innerHTML = `<a>Главный экран</a> · <a href="">${document.title}</a>`
  // }
  // breadCrumbsDocumentTitleSet()
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

  function assignHiddenClassToDataValue(array) {
    for (let i = 0; i < array.length; i++) {
      console.log(array[i])
      if (array[i].dataset.value != 'free') {
        array[i].classList.add('hidden')
      }
    }
  }
  function resetStates(subject, params) {
    for (let i = 0; i < subject.length; i++) {
      subject[i].classList.remove(params)
    }
  }
  function updateElements() {
    const textarea = document.querySelector('textarea')
    const fontSlots = document.querySelectorAll('.A_FontPreview')

    fontSlots.forEach((slot) => {
      slot.innerHTML = textarea.value
    })
  }

  const textarea = document.querySelector('textarea')
  textarea.addEventListener('input', updateElements)

  buildObjectWithFilteredFonts(fonts)
  for (let i = 0; i < fonts.length; i++) {}
  function iterateThroughArrayAndSetClassToAllItemsIfNotMatchingUpWithTrigger(
    trigger,
    array,
    extra
  ) {
    for (let p = 0; p < trigger.length; p++) {
      if (trigger[p].classList.contains('active') == true) {
        let target = trigger[p]
        console.log(target)
        for (let i = 0; i < Object.keys(array).length; i++) {
          if (Object.keys(array)[i] != target.dataset.filterparameter) {
            console.log(Object.keys(array)[i])
            for (let j = 0; j < array[Object.keys(array)[i]].length; j++) {
              console.log(array[Object.keys(array)[i]][j])
              array[Object.keys(array)[i]][j].classList.add('hidden')
            }
          }
        }
      }
    }
    for (let button of extra) {
      if (button.children[0].classList.contains('active')) {
        assignHiddenClassToDataValue(fontSlot)
      }
    }
  }
  for (let button of menuFilterButtons) {
    button.addEventListener('click', (e) => {
      resetStates(fonts, 'hidden')
      if (button.classList.contains('active')) {
        button.classList.remove('active')
      } else {
        for (let i = 0; i < menuFilterButtons.length; i++) {
          menuFilterButtons[i].classList.remove('active')
        }
        button.classList.add('active')
      }
      iterateThroughArrayAndSetClassToAllItemsIfNotMatchingUpWithTrigger(
        menuFilterButtons,
        buildObjectWithFilteredFonts(fonts),
        menuExtraSettingButtons
      )
    })
  }
  for (let button of menuExtraSettingButtons) {
    button.addEventListener('click', (e) => {
      resetStates(fonts, 'hidden')
      button.children[0].classList.toggle('active')
      iterateThroughArrayAndSetClassToAllItemsIfNotMatchingUpWithTrigger(
        menuFilterButtons,
        buildObjectWithFilteredFonts(fonts),
        menuExtraSettingButtons
      )
    })
  }
})
