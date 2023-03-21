// import './fontArticle.css'
// window.addEventListener('DOMContentLoaded', (event) => {
//   document.getElementsByClassName(
//     'A_BreadCrumbs'
//   )[0].innerHTML = `Главный экран · Библиотека · ${document.title}`
//   document.getElementsByTagName('li')[0].addEventListener('click', (event) => {
//     event.preventDefault()
//     document.getElementsByTagName('nav')[0].classList.toggle('glyph')
//     document.getElementsByTagName('main')[0].classList.toggle('glyph')
//     console.log(document.title)
//     // document.getElementsByTagName('main')[0].style.marginLeft =
//     //   'var(--marginExtendedMain)'
//   })
//   // aa
//   // Количество пикселей до разбивки
//   let animationGlyphStartPoint = document.getElementsByClassName('devision')[0].offsetTop
//   // Высота разбивки
//   let height = document.getElementsByClassName('devision')[0].offsetHeight
//   // Анонимная функция по скроллу
//   addEventListener('scroll', (e) => {
//     // Ну скроллу прибавляю
//     let scroll = window.scrollY + window.innerHeight / 2
//     let valueToShiftNavStart = animationGlyphStartPoint - scroll
//     let valueToShiftMainStart = animationGlyphStartPoint - scroll - 100
//     if (scroll > animationGlyphStartPoint && scroll < animationGlyphStartPoint + height) {
//       if (valueToShiftNavStart * -1 > 328 && valueToShiftNavStart * -1 < 1200) {
//         document.getElementsByTagName('nav')[0].classList.remove('glyph')
//         document.getElementsByTagName('main')[0].classList.remove('glyph')
//         document.getElementsByTagName('nav')[0].style.width = `${
//           valueToShiftNavStart * -1
//         }px`
//       }
//       if (valueToShiftNavStart * -1 > 328 && valueToShiftNavStart * -1 < 1200) {
//         document.getElementsByTagName('nav')[0].classList.remove('glyph')
//         document.getElementsByTagName('main')[0].classList.remove('glyph')
//         document.getElementsByTagName('main')[0].style.marginLeft = `${
//           valueToShiftMainStart * -1
//         }px`
//       }
//     }
//     // Кусок кода, который доводит линию и отступ до конца.
//     if (scroll > animationGlyphStartPoint + height) {
//       document.getElementsByTagName('nav')[0].classList.add('glyph')
//       document.getElementsByTagName('main')[0].classList.add('glyph')
//       document.getElementsByTagName('nav')[0].style.width = null
//       document.getElementsByTagName('main')[0].style.marginLeft = null
//     } else if (scroll < animationGlyphStartPoint) {
//       document.getElementsByTagName('nav')[0].classList.remove('glyph')
//       document.getElementsByTagName('main')[0].classList.remove('glyph')
//       document.getElementsByTagName('nav')[0].style.width =
//         'var(--navigationWidth)'
//       document.getElementsByTagName('main')[0].style.marginLeft =
//         'calc(var(--navigationWidth) + var(--margin))'
//     }
//   })
// })

import './fontArticle.css'
window.addEventListener('DOMContentLoaded', (event) => {
  document.getElementsByClassName(
    'A_BreadCrumbs'
  )[0].innerHTML = `Главный экран · Библиотека · ${document.title}`
  document.getElementsByTagName('li')[0].addEventListener('click', (event) => {
    event.preventDefault()
    nav.classList.toggle('glyph')
    main.classList.toggle('glyph')
    console.log(document.title)
    // document.getElementsByTagName('main')[0].style.marginLeft =
    //   'var(--marginExtendedMain)'
  })
  const devision = document.getElementsByClassName('devision')
  const animationGlyphStartPoint = devision[0].offsetTop
  const animationGlyphEndPoint = devision[1].offsetTop
  const nav = document.getElementsByTagName('nav')[0]
  const main = document.getElementsByTagName('main')[0]
  let height = document.getElementsByClassName('devision')[0].offsetHeight
  addEventListener('scroll', (e) => {
    // let scroll = window.scrollY + window.innerHeight / 2
    let scroll = window.scrollY
    let valueToShiftNavStart = animationGlyphStartPoint - scroll
    let valueToShiftMainStart = animationGlyphStartPoint - scroll - 100
    let valueToShiftNavEnd = animationGlyphEndPoint - scroll
    let val = 1200 - (valueToShiftNavEnd + 328) * -1
    let valueToShiftMainEnd = animationGlyphEndPoint - scroll - 100
    console.warn(scroll)
    console.log(animationGlyphStartPoint + height)
    console.log(animationGlyphEndPoint + height)
    let resetClass = function reset() {
      document.getElementsByTagName('nav')[0].classList.remove('glyph')
      main.classList.remove('glyph')
    }
    if (
      scroll >= animationGlyphStartPoint &&
      scroll <= animationGlyphStartPoint + height
    ) {
      if (valueToShiftNavStart * -1 > 328 && valueToShiftNavStart * -1 < 1200) {
        resetClass
        nav.style.width = `${valueToShiftNavStart * -1}px`
        main.style.marginLeft = `${valueToShiftMainStart * -1}px`
      }
    } else if (
      scroll >= animationGlyphEndPoint &&
      scroll <= animationGlyphEndPoint + height
    ) {
      if (valueToShiftNavEnd * -1 > 328 && valueToShiftNavEnd * -1 < 1200) {
        console.warn('hio')
        nav.classList.remove('glyph')
        main.classList.remove('glyph')

        nav.style.width = `${val}px`
        main.style.marginLeft = `${val + 100}px`
      }
    }
    if (
      scroll < animationGlyphStartPoint ||
      scroll > animationGlyphEndPoint + height
    ) {
      nav.style.width = 'var(--navigationWidth)'
      main.style.marginLeft = 'calc(var(--navigationWidth) + var(--margin))'
      nav.classList.remove('glyph')
      main.classList.remove('glyph')
    } else if (
      scroll > animationGlyphStartPoint + height &&
      scroll < animationGlyphEndPoint
    ) {
      nav.style = null
      main.style.marginLeft = null
      nav.classList.add('glyph')
      main.classList.add('glyph')
    }
  })
})
