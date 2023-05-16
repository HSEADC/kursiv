/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


document.addEventListener('DOMContentLoaded', function (e) {
  var arrow = document.getElementsByClassName('Q_FontArrow');
  var fontSlot = document.getElementsByClassName('O_FontSlot');
  var styles = document.getElementsByClassName('M_FontTitleSubtitle');
  var menuFilterButtons = document.getElementsByClassName('M_MenuFontStyleButton');
  var menuExtraSettingButtons = document.querySelectorAll('.A_MenuHorizontalButton');
  var fonts = document.getElementsByClassName('O_FontSlot');

  for (var i = 0; i < fontSlot.length; i++) {
    var fontName = fontSlot[i].dataset.name;
    fontSlot[i].children[1].style.fontFamily = "".concat(fontName);
  }

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

  function breadCrumbsDocumentTitleSet() {
    document.getElementsByClassName('A_BreadCrumbs')[0].innerHTML = "<a>\u0413\u043B\u0430\u0432\u043D\u044B\u0439 \u044D\u043A\u0440\u0430\u043D</a> \xB7 <a href=\"\">".concat(document.title, "</a>");
  }

  breadCrumbsDocumentTitleSet();

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

  function assignHiddenClassToDataValue(array) {
    for (var _i = 0; _i < array.length; _i++) {
      console.log(array[_i]);

      if (array[_i].dataset.value != 'free') {
        array[_i].classList.add('hidden');
      }
    }
  }

  function resetStates(subject, params) {
    for (var _i2 = 0; _i2 < subject.length; _i2++) {
      subject[_i2].classList.remove(params);
    }
  }

  function updateElements() {
    var textarea = document.querySelector('textarea');
    var fontSlots = document.querySelectorAll('.A_FontPreview');
    fontSlots.forEach(function (slot) {
      slot.innerHTML = textarea.value;
    });
  }

  var textarea = document.querySelector('textarea');
  textarea.addEventListener('input', updateElements);
  buildObjectWithFilteredFonts(fonts);

  for (var _i3 = 0; _i3 < fonts.length; _i3++) {}

  function iterateThroughArrayAndSetClassToAllItemsIfNotMatchingUpWithTrigger(trigger, array, extra) {
    for (var p = 0; p < trigger.length; p++) {
      if (trigger[p].classList.contains('active') == true) {
        var target = trigger[p];
        console.log(target);

        for (var _i4 = 0; _i4 < Object.keys(array).length; _i4++) {
          if (Object.keys(array)[_i4] != target.dataset.filterparameter) {
            console.log(Object.keys(array)[_i4]);

            for (var j = 0; j < array[Object.keys(array)[_i4]].length; j++) {
              console.log(array[Object.keys(array)[_i4]][j]);

              array[Object.keys(array)[_i4]][j].classList.add('hidden');
            }
          }
        }
      }
    }

    var _iterator2 = _createForOfIteratorHelper(extra),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var button = _step2.value;

        if (button.children[0].classList.contains('active')) {
          assignHiddenClassToDataValue(fontSlot);
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  }

  var _iterator3 = _createForOfIteratorHelper(menuFilterButtons),
      _step3;

  try {
    var _loop2 = function _loop2() {
      var button = _step3.value;
      button.addEventListener('click', function (e) {
        resetStates(fonts, 'hidden');

        if (button.classList.contains('active')) {
          button.classList.remove('active');
        } else {
          for (var _i5 = 0; _i5 < menuFilterButtons.length; _i5++) {
            menuFilterButtons[_i5].classList.remove('active');
          }

          button.classList.add('active');
        }

        iterateThroughArrayAndSetClassToAllItemsIfNotMatchingUpWithTrigger(menuFilterButtons, buildObjectWithFilteredFonts(fonts), menuExtraSettingButtons);
      });
    };

    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      _loop2();
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }

  var _iterator4 = _createForOfIteratorHelper(menuExtraSettingButtons),
      _step4;

  try {
    var _loop3 = function _loop3() {
      var button = _step4.value;
      button.addEventListener('click', function (e) {
        resetStates(fonts, 'hidden');
        button.children[0].classList.toggle('active');
        iterateThroughArrayAndSetClassToAllItemsIfNotMatchingUpWithTrigger(menuFilterButtons, buildObjectWithFilteredFonts(fonts), menuExtraSettingButtons);
      });
    };

    for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
      _loop3();
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }
});
/******/ })()
;