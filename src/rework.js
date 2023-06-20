import './library/rework.css'
import { scale } from './app.js'
document.addEventListener('DOMContentLoaded', () => {
  let glyphSlotWidth = document.querySelector('.W_GlyphSlot')
  let mainWidth = document.querySelector('.SO_Main').offsetWidth
  let windowWidth = window.innerWidth
  const glyphs = document.getElementsByClassName('A_Glyph')
  const slots = document.getElementsByClassName('A_GlyphGrow')
  let glyphMaxWidth =
    document.querySelector('.O_GlyphSlot').offsetWidth +
    parseInt(
      window
        .getComputedStyle(document.querySelector('.W_GlyphsTable'))
        .getPropertyValue('padding-left')
    ) *
      2
  let glyphAnimationTriggers = document.querySelectorAll(
    '.Q_AnimationContainer'
  )
  function getChangedWindowSize() {
    let changedWidth = window.innerWidth
    window.addEventListener('resize', () => {
      changedWidth = window.innerWidth
    })
    return changedWidth
  }
  if (window.innerWidth > 1440) {
    function adjustLayoutOnScroll() {
      if (
        glyphAnimationTriggers[0].getBoundingClientRect().top <= 0 &&
        glyphAnimationTriggers[0].getBoundingClientRect().top >=
          glyphAnimationTriggers[0].offsetHeight * -1
      ) {
        glyphSlotWidth.style.maxWidth = `${scale(
          glyphAnimationTriggers[0].getBoundingClientRect().top * -1,
          0,
          glyphAnimationTriggers[0].offsetHeight,
          0,
          glyphMaxWidth
        )}px`
        glyphSlotWidth.style.borderRight = `1px solid rgba(0, 0, 0, ${scale(
          glyphAnimationTriggers[0].getBoundingClientRect().top * -1,
          0,
          glyphAnimationTriggers[0].offsetHeight,
          0,
          1
        )})`
      } else if (
        glyphAnimationTriggers[0].getBoundingClientRect().top <=
        glyphAnimationTriggers[0].offsetHeight * -1
      ) {
        glyphSlotWidth.style.maxWidth = `${glyphMaxWidth}px`
        glyphSlotWidth.style.borderRight = `1px solid rgba(0, 0, 0, 1)`
      } else {
        glyphSlotWidth.style.maxWidth = `0px`
      }
    }
    window.addEventListener('scroll', adjustLayoutOnScroll)
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
  function addActiveClass() {
    const main = document.querySelector('.SO_Main')
    const screens = document.querySelectorAll('.A_Screen')
    const navTitles = document.querySelectorAll('.A_NavText')
    for (let i = 0; i < screens.length; i++) {
      const screenPosition = screens[i].getBoundingClientRect().top
      if (
        screenPosition <= 0 + window.innerHeight / 2 &&
        screenPosition <= window.innerHeight
      ) {
        navTitles.forEach((title) => {
          title.classList.remove('active')
        })

        navTitles[i].classList.add('active')
      }
    }
  }

  console.warn(slots)
  for (let i = 0; i < glyphs.length; i++) {
    glyphs[i].addEventListener('mouseover', () => {
      for (let j = 0; j < slots.length; j++) {
        slots[j].children[0].textContent = glyphs[i].textContent
      }
    })
  }
  window.addEventListener('scroll', addActiveClass)
})
