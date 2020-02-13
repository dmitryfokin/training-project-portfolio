import './less/main.less'

let ready = $(document).ready(function () {

  $('#page-nav').onePageNav({
    currentClass: 'page-nav__active',
    changeHash: false,
    scrollSpeed: 750,
    scrollThreshold: 0.5,
    filter: '',
    easing: 'swing',
    begin: function () {
    },
    end: function () {
    },
    scrollChange: function ($currentListItem) {
    },
  })

  $("#backTop").hide()

  window.addEventListener('scroll', throttle(function () {
    if ($(this).scrollTop() > 200) {
      $("#backTop").fadeIn()
    } else {
      $("#backTop").fadeOut()
    }
  }, 300));

  // filter projects
  $('#project-cards-list').mixItUp()

  //var mixer = mixitup('#project-cards-list');

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
    mobileNavContainer.classList.toggle('mobile-nav--active');
    mobileOverlay.classList.toggle('mobile-nav-overlay--active');
    body.classList.toggle('no-scroll');
  }

  function throttle(fn, wait) {
    let time = Date.now()

    return () => {
      if ((time + wait - Date.now()) < 0) {
        fn()
        time = Date.now()
      }
    }
  }

});
