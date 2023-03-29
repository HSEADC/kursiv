document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      console.log(link.getAttribute('href')[1])
      e.preventDefault()
      const target = document.getElementById(link.getAttribute('href')[1])
      target.scrollIntoView({ behavior: 'smooth', inline: 'end' })
    })
  })
  // Smart adaptive navigation system, which keeps track of the user scroll.
  // fourth try start
  let subNavElements = document.getElementsByClassName('sub')
  let sections = document.getElementsByTagName('section')
  let sectionHeight = $(sections).height()
  console.log(subNavElements)
  console.log(sections)
  console.log(subNavElements[0])
  console.log(sections[0])
  window.addEventListener('scroll', (event) => {
    for (let i = 0; i < sections.length; i++) {
      if (sections[i].getBoundingClientRect().top <= sectionHeight * 0.5) {
        Object.values(subNavElements).forEach((element) => {
          element.classList.remove('active')
        })
        // subNavElements[i - 1].classList.remove('active')
        subNavElements[i].classList.add('active')
        // subNavElements[i + 1].classList.remove('active')
      }
    }
  })
  // Main Menu system
})
