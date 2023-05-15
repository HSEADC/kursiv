import './library/rework.css'
document.addEventListener('DOMContentLoaded', () => {
  function scale(number, inMin, inMax, outMin, outMax) {
    return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin
  }
  let glyphSlotWidth = document.querySelector('.W_GlyphSlot')
  let mainWidth = document.querySelector('.SO_Main').offsetWidth
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
  let windowWidth = window.innerWidth
  if (windowWidth > 1440) {
    window.addEventListener('scroll', adjustLayoutOnScroll)
  }
  window.addEventListener('resize', () => {
    let windowWidth = window.innerWidth
    if (windowWidth > 1440) {
      window.addEventListener('scroll', adjustLayoutOnScroll)
    }
  })
})
