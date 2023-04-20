export function setSizeForGlyphs() {
  let leftLine = document.querySelector('.W_GlyphSlot'),
    rightLine = document.querySelector('#rightBorder'),
    glyphArea = document.querySelector('.W_GlyphTable'),
    leftPadding = leftLine.getBoundingClientRect().right,
    rightPadding = window.innerWidth - rightLine.getBoundingClientRect().right
  console.log('hi')
  glyphArea.style.width = `${
    window.innerWidth - rightPadding - leftPadding - 80
  }px`
  if (glyphArea.width != window.innerWidth - rightPadding - leftPadding) {
  }
}
