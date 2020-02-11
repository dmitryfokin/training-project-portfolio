// import * as $ from 'jquery'
// import './js/jquery.mixitup.min'

import './less/main.less'
import mixitup from 'mixitup';

$(document).ready(function () {

  // filter projects
  // $('#project-cards-list').mixItUp()

  var mixer = mixitup('#project-cards-list');


  // form callback
  $('.form-callback__input, .form-callback__textarea').focus(function (e) {
    e.preventDefault()

    $(this).parent().children(".fake-placeholder").addClass('active')
  })

  $('.form-callback__input, .form-callback__textarea').blur(function (e) {
    e.preventDefault()
    if (!(this).value.trim()) {
      $(this).parent().children(".fake-placeholder").removeClass('active')
    }
  })

  const menuToggle = document.querySelector('#menu-toggle');
  const mobileNavContainer = document.querySelector('#mobile-nav');
  const mobileOverlay = document.querySelector('.mobile-nav-overlay');
  const body = document.querySelector('body');

  menuToggle.onclick = function () {
    menuToggle.classList.toggle('menu-icon-active');
    mobileNavContainer.classList.toggle('mobile-nav--active-1');
    mobileNavContainer.classList.toggle('mobile-nav--active-2');
    mobileOverlay.classList.toggle('mobile-nav-overlay--active');
    body.classList.toggle('no-scroll');
  }

})


