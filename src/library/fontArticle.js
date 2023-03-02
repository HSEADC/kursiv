import './fontArticle.css'
window.addEventListener('DOMContentLoaded', (event) => {
  document.getElementsByClassName(
    'A_BreadCrumbs'
  )[0].innerHTML = `Главный экран · Библиотека · ${document.title}`
  document.getElementsByTagName('li')[0].addEventListener('click', (event) => {
    event.preventDefault()
    document.getElementsByTagName('nav')[0].classList.toggle('glyph')
    document.getElementsByTagName('main')[0].classList.toggle('glyph')
    console.log(document.title)
    // document.getElementsByTagName('main')[0].style.marginLeft =
    //   'var(--marginExtendedMain)'
  })
  // aa
  // Количество пикселей до разбивки
  let animationStart = document.getElementsByClassName('devision')[0].offsetTop
  // Высота разбивки
  let height = document.getElementsByClassName('devision')[0].offsetHeight
  // Анонимная функция по скроллу
  addEventListener('scroll', (e) => {
    // Ну скроллу прибавляю
    let scroll = window.scrollY + window.innerHeight / 2
    let progressNav = animationStart - scroll
    let progressMain = animationStart - scroll - 100
    if (scroll > animationStart && scroll < animationStart + height) {
      if (progressNav * -1 > 328 && progressNav * -1 < 1200) {
        document.getElementsByTagName('nav')[0].classList.remove('glyph')
        document.getElementsByTagName('main')[0].classList.remove('glyph')
        document.getElementsByTagName('nav')[0].style.width = `${
          progressNav * -1
        }px`
      }
      if (progressNav * -1 > 328 && progressNav * -1 < 1200) {
        document.getElementsByTagName('nav')[0].classList.remove('glyph')
        document.getElementsByTagName('main')[0].classList.remove('glyph')
        document.getElementsByTagName('main')[0].style.marginLeft = `${
          progressMain * -1
        }px`
      }
    }
    // Кусок кода, который доводит линию и отступ до конца.
    if (scroll > animationStart + height) {
      document.getElementsByTagName('nav')[0].classList.add('glyph')
      document.getElementsByTagName('main')[0].classList.add('glyph')
      document.getElementsByTagName('nav')[0].style.width = null
      document.getElementsByTagName('main')[0].style.marginLeft = null
    } else if (scroll < animationStart) {
      document.getElementsByTagName('nav')[0].classList.remove('glyph')
      document.getElementsByTagName('main')[0].classList.remove('glyph')
      document.getElementsByTagName('nav')[0].style.width =
        'var(--navigationWidth)'
      document.getElementsByTagName('main')[0].style.marginLeft =
        'calc(var(--navigationWidth) + var(--margin))'
    }
  })
})
//   // aaa
//   // document.addEventListener('scroll', (e) => {
//   //   let scroll = window.scrollY + window.innerHeight
//   //   let progressNav = animationStart - scroll
//   //   let progressMain = animationStart - scroll - 100
//   //   if (scroll > animationStart && scroll < animationStart + height) {
//   //     console.log('progress:' + progressNav * -1)
//   //     console.warn(document.getElementsByTagName('nav')[0].style.width)
//   //     if (progressNav * -1 > 328) {
//   //       document.getElementsByTagName('nav')[0].style.width = `${
//   //         progressNav * -1
//   //       }px`
//   //     }
//   //     if (progressNav * -1 > 328) {
//   //       document.getElementsByTagName('main')[0].style.marginLeft = `${
//   //         progressMain * -1
//   //       }px`
//   //     }
//   //   }
//   // })
//   // document.addEventListener('scroll', (e) => {
//   //   let scroll = window.scrollY + window.innerHeight
//   //   let progressNav = animationStart - scroll
//   //   let progressMain = animationStart - scroll - 100
//   //   if (scroll > animationStart && scroll < animationStart + height) {
//   //     console.log('progress:' + progressNav * -1)
//   //     console.warn(document.getElementsByTagName('nav')[0].style.width)
//   //     document.getElementsByTagName('nav')[0].style.width = `${
//   //       progressNav * -1
//   //     }px`
//   //     document.getElementsByTagName('main')[0].style.marginLeft = `${
//   //       progressMain * -1
//   //     }px`
//   //   }
//   // })
// })
