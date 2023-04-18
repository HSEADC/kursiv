import './fontArticle.css'
window.addEventListener('DOMContentLoaded', () => {
  const devisions = document.getElementsByClassName('Q_Devision')
  const triggerPointStart = devisions[0].offsetTop
  const triggerPointEnd = devisions[1].offsetTop
  const nav = document.querySelector('.W_Nav')
  const main = document.querySelector('.SO_Main')
  const languages = document.querySelectorAll('[data-languageColumn]')
  const languageButton = document.querySelector('.A_LanguagesButton')
  let height = devisions[0].offsetHeight
  let fontStyles = document.getElementsByClassName('M_FontStyleTable')
  let spans = document.querySelectorAll('span')
  let glyphScreen = document.getElementsByClassName('W_GlyphTable')
  function setFontTo(textElement) {
    for (let i = 0; i < textElement.length; i++) {
      let fontName = textElement[i].dataset.name
      textElement[i].style.fontFamily = `${fontName}`
    }
  }
  setFontTo(fontStyles)
  setFontTo(spans)
  setFontTo(glyphScreen)
  function hideExtraPoints(array, excessive, trigger) {
    array.forEach((e) => {
      for (let i = 5; i < e.childElementCount; i++) {
        if (e.childElementCount > excessive) {
          e.children[i].classList.toggle('hidden')
        }
        trigger.addEventListener('click', () => {
          e.children[i].classList.toggle('hidden')
          trigger.classList.toggle('active')
          if (trigger.classList.contains('active')) {
            trigger.innerHTML = 'Скрыть'
          } else {
            trigger.innerHTML = 'Показать еще'
          }
        })
      }
    })
  }
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault()
      const target = document.querySelector(link.getAttribute('href'))
      const yOffset = 1
      const y =
        target.getBoundingClientRect().top + window.pageYOffset + yOffset

      window.scrollTo({ top: y, behavior: 'smooth' })
    })
  })
  function breadCrumbsDocumentTitleSet() {
    document.getElementsByClassName(
      'A_BreadCrumbs'
    )[0].innerHTML = `<a>Главный экран</a> · <a href="../index.html">Библиотека</a> · <a href="">${document.title}</a>`
  }
  breadCrumbsDocumentTitleSet()
  function addActiveClass() {
    const main = document.querySelector('.SO_Main')
    const screens = document.querySelectorAll('.A_Screen')
    const navTitles = document.querySelectorAll('.A_NavText')
    for (let i = 0; i < screens.length; i++) {
      const screenPosition = screens[i].getBoundingClientRect().top
      if (screenPosition <= 0 && screenPosition <= window.innerHeight) {
        navTitles.forEach((title) => {
          title.classList.remove('active')
        })

        navTitles[i].classList.add('active')
      }
    }
  }
  function adjustLayoutOnScroll() {
    let scroll = window.scrollY + 2 * (window.innerHeight / 3)
    let valueToShiftNavStart = triggerPointStart - scroll
    let valueToShiftNavEnd = triggerPointEnd - scroll
    let val = 1200 - (valueToShiftNavEnd + 421) * -1

    if (scroll >= triggerPointStart && scroll <= triggerPointStart + height) {
      if (
        valueToShiftNavStart * -1 >= 421 &&
        valueToShiftNavStart * -1 <= 1200
      ) {
        nav.style.width = `${valueToShiftNavStart * -1}px`
        main.style.marginLeft = `${valueToShiftNavStart * -1}px`
      }
    } else if (
      scroll >= triggerPointEnd &&
      scroll <= triggerPointEnd + height
    ) {
      if (val >= 421 && val <= 1200) {
        nav.style.width = `${val}px`
        main.style.marginLeft = `${val}px`
      }
    }
    if (scroll <= triggerPointStart || scroll >= triggerPointEnd + height) {
      nav.classList.add('transition')
      nav.classList.add('transition')
      nav.style = 'none'
      main.style = 'none'
    } else {
      nav.classList.remove('transition')
      nav.classList.remove('transition')
    }
    if (scroll >= triggerPointStart + height && scroll <= triggerPointEnd) {
      nav.classList.add('transition')
      nav.classList.add('transition')
      nav.style.width = '1200px'
      main.style.marginLeft = '1200px'
    }
  }
  const glyphs = document.getElementsByClassName('A_Glyph')
  const slots = document.getElementsByClassName('A_GlyphGrow')
  console.warn(slots)
  for (let i = 0; i < glyphs.length; i++) {
    glyphs[i].addEventListener('mouseover', () => {
      for (let j = 0; j < slots.length; j++) {
        slots[j].children[0].textContent = glyphs[i].textContent
      }
    })
  }
  hideExtraPoints(languages, 5, languageButton)
  window.addEventListener('load', addActiveClass)
  window.addEventListener('scroll', addActiveClass)
  window.addEventListener('scroll', adjustLayoutOnScroll)
})
