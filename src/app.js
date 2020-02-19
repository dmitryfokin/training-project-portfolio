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
      if ($(this).scrollTop() > 500) {
        $("#backTop").fadeIn()
      } else {
        $("#backTop").fadeOut()
      }
    }.bind(this), 200)
  )

  // filter projects
  $('#project-cards-list').mixItUp()

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

  // tpggle menu
  const menuToggle = document.querySelector('#menu-toggle')
  const mobileNavContainer = document.querySelector('#mobile-nav')
  const mobileOverlay = document.querySelector('.mobile-nav-overlay')
  const body = document.querySelector('body')

  menuToggle.onclick = function () {
    menuToggle.classList.toggle('menu-icon-active')
    mobileNavContainer.classList.toggle('mobile-nav--active')
    mobileOverlay.classList.toggle('mobile-nav-overlay--active')
    body.classList.toggle('no-scroll')
  }

  // tools function
  function throttle(fn, wait) {
    let time = Date.now();

    return function () {
      if ((time + wait - Date.now()) < 0) {
        fn();
        time = Date.now();
      }
    }
  }

})
