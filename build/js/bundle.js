(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

$(document).ready(function () {
  //Header BURGER
  $('.header__burger').click(function (event) {
    $('.header__burger,.header__menu').toggleClass('active');
    $('body').toggleClass('lock');
  });
  $('.header__link').click(function (event) {
    $('.header__burger, .header__menu').removeClass('active');
    $('body').removeClass('lock');
  }); //Adaptive SlickSlider 

  $(window).on('resize', function (e) {
    var init = $(".news__wrapper").data('init-slider');

    if (window.innerWidth < 769) {
      if (init != 1) {
        $('.news__wrapper').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
          adaptiveHeight: true
        }).data({
          'init-slider': 1
        });
      }
    } else {
      if (init == 1) {
        $('.news__wrapper').slick('unslick').data({
          'init-slider': 0
        });
      }
    }
  }).trigger('resize');
}); //Dark theme switch

var toggleSwitch = document.querySelector('.toggle-button');

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('data-theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('data-theme', 'light');
  }
}

toggleSwitch.addEventListener('change', switchTheme, false); //ScrollAnimations

var animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
  var animOnScroll = function animOnScroll() {
    for (var index = 0; index < animItems.length; index++) {
      var animItem = animItems[index];
      var animItemHeight = animItem.offsetHeight;
      var animItemOffset = offset(animItem).top;
      var animStart = 4;
      var animItemPoint = window.innerHeight - animItemHeight / animStart;

      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if (pageYOffset > animItemOffset - animItemPoint && pageYOffset < animItemOffset + animItemHeight) {
        animItem.classList.add('_active');
      } else {
        if (!animItem.classList.contains("_anim-no-hide")) {
          animItem.classList.remove('_active');
        }
      }
    }
  };

  var offset = function offset(el) {
    var rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return {
      top: rect.top + scrollTop,
      left: rect.left + scrollLeft
    };
  };

  window.addEventListener('scroll', animOnScroll);
  animOnScroll();
} //LoadMore 


var loadMoreBtn = document.querySelector('#load-more-btn');
var currentItem = 3;

loadMoreBtn.onclick = function () {
  var boxes = _toConsumableArray(document.querySelectorAll('.works__wrapper .works__card'));

  for (var i = currentItem; i < currentItem + 3; i++) {
    boxes[i].style.display = "inline-block";
  }

  currentItem += 3;

  if (currentItem >= boxes.length) {
    loadMoreBtn.style.display = "none";
  }
}; // Anchor Slide


document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

},{}]},{},[1])

//# sourceMappingURL=bundle.js.map
