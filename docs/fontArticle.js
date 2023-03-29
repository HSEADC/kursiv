/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

window.addEventListener('DOMContentLoaded', function () {
  var devisions = document.getElementsByClassName('Q_Devision');
  var triggerPointStart = devisions[0].offsetTop;
  var triggerPointEnd = devisions[1].offsetTop;
  var nav = document.querySelector('.W_Nav');
  var main = document.querySelector('.SO_Main');
  var languages = document.querySelectorAll('[data-languageColumn]');
  var languageButton = document.querySelector('.A_LanguagesButton');
  var height = devisions[0].offsetHeight;

  function hideExtraPoints(array, excessive, trigger) {
    array.forEach(function (e) {
      var _loop = function _loop(i) {
        if (e.childElementCount > excessive) {
          e.children[i].classList.toggle('hidden');
        }

        trigger.addEventListener('click', function () {
          e.children[i].classList.toggle('hidden');
          trigger.classList.toggle('active');

          if (trigger.classList.contains('active')) {
            trigger.innerHTML = 'Скрыть';
          } else {
            trigger.innerHTML = 'Показать еще';
          }
        });
      };

      for (var i = 5; i < e.childElementCount; i++) {
        _loop(i);
      }
    });
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

  function breadCrumbsDocumentTitleSet() {
    document.getElementsByClassName('A_BreadCrumbs')[0].innerHTML = "\u0413\u043B\u0430\u0432\u043D\u044B\u0439 \u044D\u043A\u0440\u0430\u043D \xB7 \u0411\u0438\u0431\u043B\u0438\u043E\u0442\u0435\u043A\u0430 \xB7 ".concat(document.title);
  }

  breadCrumbsDocumentTitleSet();

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

  function adjustLayoutOnScroll() {
    var scroll = window.scrollY + 2 * (window.innerHeight / 3);
    var valueToShiftNavStart = triggerPointStart - scroll;
    var valueToShiftNavEnd = triggerPointEnd - scroll;
    var val = 1200 - (valueToShiftNavEnd + 421) * -1;

    if (scroll >= triggerPointStart && scroll <= triggerPointStart + height) {
      if (valueToShiftNavStart * -1 >= 421 && valueToShiftNavStart * -1 <= 1200) {
        nav.style.width = "".concat(valueToShiftNavStart * -1, "px");
        main.style.marginLeft = "".concat(valueToShiftNavStart * -1, "px");
      }
    } else if (scroll >= triggerPointEnd && scroll <= triggerPointEnd + height) {
      if (val >= 421 && val <= 1200) {
        nav.style.width = "".concat(val, "px");
        main.style.marginLeft = "".concat(val, "px");
      }
    }

    if (scroll <= triggerPointStart || scroll >= triggerPointEnd + height) {
      nav.classList.add('transition');
      nav.classList.add('transition');
      nav.style = 'none';
      main.style = 'none';
    } else {
      nav.classList.remove('transition');
      nav.classList.remove('transition');
    }

    if (scroll >= triggerPointStart + height && scroll <= triggerPointEnd) {
      nav.classList.add('transition');
      nav.classList.add('transition');
      nav.style.width = '1200px';
      main.style.marginLeft = '1200px';
    }
  }

  var glyphs = document.getElementsByClassName('A_Glyph');
  var slots = document.getElementsByClassName('A_GlyphGrow');
  console.warn(slots);

  var _loop2 = function _loop2(i) {
    glyphs[i].addEventListener('mouseover', function () {
      for (var j = 0; j < slots.length; j++) {
        slots[j].children[0].textContent = glyphs[i].textContent;
      }
    });
  };

  for (var i = 0; i < glyphs.length; i++) {
    _loop2(i);
  }

  hideExtraPoints(languages, 5, languageButton);
  window.addEventListener('load', addActiveClass);
  window.addEventListener('scroll', addActiveClass);
  window.addEventListener('scroll', adjustLayoutOnScroll);
});
/******/ })()
;