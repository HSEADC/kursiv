/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

document.addEventListener('DOMContentLoaded', function (e) {
  console.log('borba');
  document.getElementsByClassName('A_BreadCrumbs')[0].innerHTML = document.getElementsByClassName('A_BreadCrumbs')[0].innerHTML + " \xB7 ".concat(document.title);
  var arrow = document.getElementsByClassName('Q_FontArrow');
  var fontSlot = document.getElementsByClassName('O_FontSlot');
  var styles = document.getElementsByClassName('M_FontTitleSubtitle');

  var _loop = function _loop(index) {
    arrow[index].addEventListener('click', function (e) {
      fontSlot[index].classList.toggle('extended');
      arrow[index].classList.toggle('extended');
      styles[index].classList.toggle('extended');
    });
  };

  for (var index = 0; index < arrow.length; index++) {
    _loop(index);
  }
});
/******/ })()
;