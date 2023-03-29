/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


document.addEventListener('DOMContentLoaded', function (e) {
  document.getElementsByClassName('A_BreadCrumbs')[0].innerHTML = document.getElementsByClassName('A_BreadCrumbs')[0].innerHTML + " \xB7 ".concat(document.title);
  var arrow = document.getElementsByClassName('Q_FontArrow');
  var fontSlot = document.getElementsByClassName('O_FontSlot');
  var styles = document.getElementsByClassName('M_FontTitleSubtitle');
  var menuFilterButtons = document.getElementsByClassName('M_MenuFontStyleButton');
  var menuExtraSettingButtons = document.getElementsByClassName('A_MenuHorizontalButton');
  var fonts = document.getElementsByClassName('O_FontSlot');

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

  function buildObjectWithFilteredFonts(object) {
    var wrapperObject = {};

    var _iterator = _createForOfIteratorHelper(object),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var fontStyle = _step.value;

        if (fontStyle.dataset.fontstyle in wrapperObject) {
          var wow = wrapperObject[fontStyle.dataset.fontstyle];
          wow.push(fontStyle);
        } else {
          wrapperObject[fontStyle.dataset.fontstyle] = [fontStyle];
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return wrapperObject;
  }

  function resetStates(subject, params) {
    for (var i = 0; i < subject.length; i++) {
      subject[i].classList.remove(params);
    }
  }

  buildObjectWithFilteredFonts(fonts);

  for (var i = 0; i < fonts.length; i++) {// console.log(fonts[i])
    // console.log(fonts[i].dataset.fontStyle)
  }

  function iterateThroughArrayAndSetClassToAllItemsIfNotMatchingUpWithTrigger(trigger, array, parameter) {
    for (var _i = 0; _i < Object.keys(array).length; _i++) {
      if (Object.keys(array)[_i] != trigger.dataset.filterparameter) {
        console.log(Object.keys(array)[_i]);

        for (var j = 0; j < array[Object.keys(array)[_i]].length; j++) {
          console.log(array[Object.keys(array)[_i]][j]);

          array[Object.keys(array)[_i]][j].classList.add('hidden');
        }
      }
    }
  }

  var _iterator2 = _createForOfIteratorHelper(menuFilterButtons),
      _step2;

  try {
    var _loop2 = function _loop2() {
      var button = _step2.value;
      button.addEventListener('click', function (e) {
        resetStates(menuFilterButtons, 'active');
        resetStates(fonts, 'hidden');
        button.classList.add('active');
        iterateThroughArrayAndSetClassToAllItemsIfNotMatchingUpWithTrigger(button, buildObjectWithFilteredFonts(fonts), 'hi');
      });
    };

    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      _loop2();
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
});
/******/ })()
;