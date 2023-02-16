window.addEventListener('DOMContentLoaded', (event) => {
  document.getElementsByClassName(
    'breadcrumbs'
  )[0].innerHTML = `Главный экран · Библиотека · ${document.title}`
  document.getElementsByTagName('li')[0].addEventListener('click', (event) => {
    event.preventDefault()
    // document.getElementsByTagName('nav')[0].classList.toggle('glyph')
    // document.getElementsByTagName('main')[0].classList.toggle('glyph')
    console.log(document.title)
    // document.getElementsByTagName('main')[0].style.marginLeft =
    //   'var(--navigationExtendedWidth)'
  })
  let animationStart = document.getElementById('devision').offsetTop
  let height = document.getElementById('devision').offsetHeight
  addEventListener('scroll', (e) => {
    let scroll = window.scrollY + window.innerHeight
    let progressNav = animationStart - scroll
    let progressMain = animationStart - scroll - 100
    if (scroll > animationStart && scroll < animationStart + height) {
      if (progressNav * -1 > 328) {
        document.getElementsByTagName('nav')[0].style.width = `${
          progressNav * -1
        }px`
      }
      if (progressNav * -1 > 328) {
        document.getElementsByTagName('main')[0].style.marginLeft = `${
          progressMain * -1
        }px`
      }
    }
    if (scroll > animationStart + height) {
      document.getElementsByTagName('nav')[0].classList.add('glyph')
      document.getElementsByTagName('main')[0].classList.add('glyph')
    } else if (scroll < animationStart) {
      document.getElementsByTagName('nav')[0].classList.remove('glyph')
      document.getElementsByTagName('main')[0].classList.remove('glyph')
      document.getElementsByTagName('nav')[0].style.width =
        'var(--navigationWidth)'
      document.getElementsByTagName('main')[0].style.marginLeft =
        'calc(var(--navigationWidth) + 100px)'
    }
  })
  // document.addEventListener('scroll', (e) => {
  //   let scroll = window.scrollY + window.innerHeight
  //   let progressNav = animationStart - scroll
  //   let progressMain = animationStart - scroll - 100
  //   if (scroll > animationStart && scroll < animationStart + height) {
  //     console.log('progress:' + progressNav * -1)
  //     console.warn(document.getElementsByTagName('nav')[0].style.width)
  //     if (progressNav * -1 > 328) {
  //       document.getElementsByTagName('nav')[0].style.width = `${
  //         progressNav * -1
  //       }px`
  //     }
  //     if (progressNav * -1 > 328) {
  //       document.getElementsByTagName('main')[0].style.marginLeft = `${
  //         progressMain * -1
  //       }px`
  //     }
  //   }
  // })
  // document.addEventListener('scroll', (e) => {
  //   let scroll = window.scrollY + window.innerHeight
  //   let progressNav = animationStart - scroll
  //   let progressMain = animationStart - scroll - 100
  //   if (scroll > animationStart && scroll < animationStart + height) {
  //     console.log('progress:' + progressNav * -1)
  //     console.warn(document.getElementsByTagName('nav')[0].style.width)
  //     document.getElementsByTagName('nav')[0].style.width = `${
  //       progressNav * -1
  //     }px`
  //     document.getElementsByTagName('main')[0].style.marginLeft = `${
  //       progressMain * -1
  //     }px`
  //   }
  // })
})
