/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/app.js
function setSizeForGlyphs() {
  var leftLine = document.querySelector('.W_GlyphSlot'),
      rightLine = document.querySelector('#rightBorder'),
      glyphArea = document.querySelector('.W_GlyphTable'),
      leftPadding = leftLine.getBoundingClientRect().right,
      rightPadding = window.innerWidth - rightLine.getBoundingClientRect().right;
  glyphArea.style.width = "".concat(window.innerWidth - rightPadding - leftPadding - 80, "px");

  if (window.innerWidth <= 900) {
    console.log('hie');
    glyphArea.style.width = '100%';
  }
}
function adjustLayoutOnScroll() {
  var glyphSlotWidth = document.querySelector('.W_GlyphSlot');
  var mainWidth = document.querySelector('.SO_Main').offsetWidth;
  var windowWidth = window.innerWidth;
  var glyphMaxWidth = document.querySelector('.O_GlyphSlot').offsetWidth + parseInt(window.getComputedStyle(document.querySelector('.W_GlyphsTable')).getPropertyValue('padding-left')) * 2;
  var glyphAnimationTriggers = document.querySelectorAll('.Q_AnimationContainer');

  if (glyphAnimationTriggers[0].getBoundingClientRect().top <= 0 && glyphAnimationTriggers[0].getBoundingClientRect().top >= glyphAnimationTriggers[0].offsetHeight * -1) {
    glyphSlotWidth.style.maxWidth = "".concat(scale(glyphAnimationTriggers[0].getBoundingClientRect().top * -1, 0, glyphAnimationTriggers[0].offsetHeight, 0, glyphMaxWidth), "px");
    glyphSlotWidth.style.borderRight = "1px solid rgba(0, 0, 0, ".concat(scale(glyphAnimationTriggers[0].getBoundingClientRect().top * -1, 0, glyphAnimationTriggers[0].offsetHeight, 0, 1), ")");
  } else if (glyphAnimationTriggers[0].getBoundingClientRect().top <= glyphAnimationTriggers[0].offsetHeight * -1) {
    glyphSlotWidth.style.maxWidth = "".concat(glyphMaxWidth, "px");
    glyphSlotWidth.style.borderRight = "1px solid rgba(0, 0, 0, 1)";
  } else {
    glyphSlotWidth.style.maxWidth = "0px";
  }
}
function scale(number, inMin, inMax, outMin, outMax) {
  return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}
;// CONCATENATED MODULE: ./src/rework.js


document.addEventListener('DOMContentLoaded', function () {
  var glyphSlotWidth = document.querySelector('.W_GlyphSlot');
  var mainWidth = document.querySelector('.SO_Main').offsetWidth;
  var windowWidth = window.innerWidth;
  var glyphs = document.getElementsByClassName('A_Glyph');
  var slots = document.getElementsByClassName('A_GlyphGrow');
  var glyphMaxWidth = document.querySelector('.O_GlyphSlot').offsetWidth + parseInt(window.getComputedStyle(document.querySelector('.W_GlyphsTable')).getPropertyValue('padding-left')) * 2;
  var glyphAnimationTriggers = document.querySelectorAll('.Q_AnimationContainer');

  function getChangedWindowSize() {
    var changedWidth = window.innerWidth;
    window.addEventListener('resize', function () {
      changedWidth = window.innerWidth;
    });
    return changedWidth;
  }

  document.querySelector('.C_HeaderSwitch').addEventListener('click', function () {
    document.querySelector('.C_HeaderSwitch').classList.toggle('active');
    document.querySelector('.W_Header').classList.toggle('active');
    document.querySelector('.SO_Main').classList.toggle('active');
  });
  console.log(getChangedWindowSize());

  if (window.innerWidth > 1440) {
    var adjustLayoutOnScroll = function adjustLayoutOnScroll() {
      if (glyphAnimationTriggers[0].getBoundingClientRect().top <= 0 && glyphAnimationTriggers[0].getBoundingClientRect().top >= glyphAnimationTriggers[0].offsetHeight * -1) {
        glyphSlotWidth.style.maxWidth = "".concat(scale(glyphAnimationTriggers[0].getBoundingClientRect().top * -1, 0, glyphAnimationTriggers[0].offsetHeight, 0, glyphMaxWidth), "px");
        glyphSlotWidth.style.borderRight = "1px solid rgba(0, 0, 0, ".concat(scale(glyphAnimationTriggers[0].getBoundingClientRect().top * -1, 0, glyphAnimationTriggers[0].offsetHeight, 0, 1), ")");
      } else if (glyphAnimationTriggers[0].getBoundingClientRect().top <= glyphAnimationTriggers[0].offsetHeight * -1) {
        glyphSlotWidth.style.maxWidth = "".concat(glyphMaxWidth, "px");
        glyphSlotWidth.style.borderRight = "1px solid rgba(0, 0, 0, 1)";
      } else {
        glyphSlotWidth.style.maxWidth = "0px";
      }
    };

    window.addEventListener('scroll', adjustLayoutOnScroll);
  }

  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      var target = document.querySelector(link.getAttribute('href'));
      var yOffset = 1;
      var y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({
        top: y,
        behavior: 'smooth'
      });
    });
  });

  function addActiveClass() {
    var main = document.querySelector('.SO_Main');
    var screens = document.querySelectorAll('.A_Screen');
    var navTitles = document.querySelectorAll('.A_NavText');

    for (var i = 0; i < screens.length; i++) {
      var screenPosition = screens[i].getBoundingClientRect().top;

      if (screenPosition <= 0 && screenPosition <= window.innerHeight) {
        navTitles.forEach(function (title) {
          title.classList.remove('active');
        });
        navTitles[i].classList.add('active');
      }
    }
  }

  console.warn(slots);

  var _loop = function _loop(i) {
    glyphs[i].addEventListener('mouseover', function () {
      for (var j = 0; j < slots.length; j++) {
        slots[j].children[0].textContent = glyphs[i].textContent;
      }
    });
  };

  for (var i = 0; i < glyphs.length; i++) {
    _loop(i);
  }

  window.addEventListener('scroll', addActiveClass);
});
/******/ })()
;