/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

window.addEventListener('DOMContentLoaded', function (event) {
  document.getElementsByClassName('A_BreadCrumbs')[0].innerHTML = "\u0413\u043B\u0430\u0432\u043D\u044B\u0439 \u044D\u043A\u0440\u0430\u043D \xB7 \u0411\u0438\u0431\u043B\u0438\u043E\u0442\u0435\u043A\u0430 \xB7 ".concat(document.title);
  document.getElementsByTagName('li')[0].addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementsByTagName('nav')[0].classList.toggle('glyph');
    document.getElementsByTagName('main')[0].classList.toggle('glyph');
    console.log(document.title); // document.getElementsByTagName('main')[0].style.marginLeft =
    //   'var(--marginExtendedMain)'
  }); // aa
  // Количество пикселей до разбивки

  var animationStart = document.getElementsByClassName('devision')[0].offsetTop; // Высота разбивки

  var height = document.getElementsByClassName('devision')[0].offsetHeight; // Анонимная функция по скроллу

  addEventListener('scroll', function (e) {
    // Ну скроллу прибавляю
    var scroll = window.scrollY + window.innerHeight / 2;
    var progressNav = animationStart - scroll;
    var progressMain = animationStart - scroll - 100;

    if (scroll > animationStart && scroll < animationStart + height) {
      if (progressNav * -1 > 328 && progressNav * -1 < 1200) {
        document.getElementsByTagName('nav')[0].classList.remove('glyph');
        document.getElementsByTagName('main')[0].classList.remove('glyph');
        document.getElementsByTagName('nav')[0].style.width = "".concat(progressNav * -1, "px");
      }

      if (progressNav * -1 > 328 && progressNav * -1 < 1200) {
        document.getElementsByTagName('nav')[0].classList.remove('glyph');
        document.getElementsByTagName('main')[0].classList.remove('glyph');
        document.getElementsByTagName('main')[0].style.marginLeft = "".concat(progressMain * -1, "px");
      }
    } // Кусок кода, который доводит линию и отступ до конца.


    if (scroll > animationStart + height) {
      document.getElementsByTagName('nav')[0].classList.add('glyph');
      document.getElementsByTagName('main')[0].classList.add('glyph');
      document.getElementsByTagName('nav')[0].style.width = null;
      document.getElementsByTagName('main')[0].style.marginLeft = null;
    } else if (scroll < animationStart) {
      document.getElementsByTagName('nav')[0].classList.remove('glyph');
      document.getElementsByTagName('main')[0].classList.remove('glyph');
      document.getElementsByTagName('nav')[0].style.width = 'var(--navigationWidth)';
      document.getElementsByTagName('main')[0].style.marginLeft = 'calc(var(--navigationWidth) + var(--margin))';
    }
  });
}); //   // aaa
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
/******/ })()
;