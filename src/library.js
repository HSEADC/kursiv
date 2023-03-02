import './library.css'
document.addEventListener('DOMContentLoaded', (e) => {
  console.log('borba')
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
})
