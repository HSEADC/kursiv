/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

document.addEventListener('DOMContentLoaded', function () {
  var devisions = document.getElementsByClassName('Q_Devision');
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      console.log(link.getAttribute('href'));
      e.preventDefault();
      var target = document.querySelector(link.getAttribute('href'));
      target.scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  function breadCrumbsDocumentTitleSet() {
    document.getElementsByClassName('A_BreadCrumbs')[0].innerHTML = "\u0413\u043B\u0430\u0432\u043D\u044B\u0439 \u044D\u043A\u0440\u0430\u043D \xB7 \u0411\u0438\u0431\u043B\u0438\u043E\u0442\u0435\u043A\u0430 \xB7 ".concat(document.title);
  }

  breadCrumbsDocumentTitleSet();

  function addActiveClass() {
    var main = document.querySelector('main');
    var screens = document.querySelectorAll('.A_Screen');
    var navTitles = document.querySelectorAll('.A_NavText');

    for (var i = 0; i < screens.length; i++) {
      var screenPosition = screens[i].getBoundingClientRect().top;
      var screenHeight = screens[i].getBoundingClientRect().height;

      if (screenPosition <= 0 && screenPosition <= window.innerHeight) {
        navTitles.forEach(function (title) {
          title.classList.remove('active');
        });
        navTitles[i].classList.add('active');
        main.children[i].classList.add('active');
      } else {
        main.children[i].classList.remove('active');
      }
    }
  } //   // Call the function on load and on scroll


  window.addEventListener('load', addActiveClass);
  window.addEventListener('scroll', addActiveClass);
  console.log('hi');
});
/******/ })()
;