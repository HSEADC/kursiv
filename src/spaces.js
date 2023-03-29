import './spaces.css'
document.addEventListener('DOMContentLoaded', () => {
  const devisions = document.getElementsByClassName('Q_Devision')
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      console.log(link.getAttribute('href'))
      e.preventDefault()
      const target = document.querySelector(link.getAttribute('href'))
      target.scrollIntoView({ behavior: 'smooth' })
    })
  })
  function breadCrumbsDocumentTitleSet() {
    document.getElementsByClassName(
      'A_BreadCrumbs'
    )[0].innerHTML = `Главный экран · Библиотека · ${document.title}`
  }
  breadCrumbsDocumentTitleSet()
  function addActiveClass() {
    const main = document.querySelector('main')
    const screens = document.querySelectorAll('.A_Screen')
    const navTitles = document.querySelectorAll('.A_NavText')

    for (let i = 0; i < screens.length; i++) {
      const screenPosition = screens[i].getBoundingClientRect().top
      const screenHeight = screens[i].getBoundingClientRect().height
      if (screenPosition <= 0 && screenPosition <= window.innerHeight) {
        navTitles.forEach((title) => {
          title.classList.remove('active')
        })

        navTitles[i].classList.add('active')
        main.children[i].classList.add('active')
      } else {
        main.children[i].classList.remove('active')
      }
    }
  }

  //   // Call the function on load and on scroll
  window.addEventListener('load', addActiveClass)
  window.addEventListener('scroll', addActiveClass)
  console.log('hi')
})
