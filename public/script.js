'use strict'

const
  header = document.querySelector('.header'),
  navbar = document.querySelector('.navbar'),
  navbarLogo = document.querySelector('.navbar .logo'),
  navbarMenuBtn = document.querySelector('.navbar__collapse-btn'),
  navbarNavList = document.querySelector('.navbar__nav-list'),
  navbarNavListLinks = Array.from(
    document.querySelectorAll('.navbar .nav-list__link')
  ),
  sliders = Array.from(document.querySelectorAll('.slider'))

onload = () => {

  /* Header Scroll Transformations */

  const
    navbarHeight = navbar.getBoundingClientRect().height,
    logoSize = navbarLogo.getBoundingClientRect().height

  const
    logoScale = navbarHeight / logoSize,
    logoTranslateY = (1 - logoScale) * logoSize / -2,
    topStripHeight = getComputedStyle(header, null).getPropertyValue('--top-strip-height')

  function headerTransform() {
    if (matchMedia('(max-width: 400px)').matches) {
      header.style.setProperty('--top-strip-height', '0px')
      navbarLogo.style.transform = `scale(${logoScale})`
      navbarLogo.style.bottom = logoTranslateY + 'px'
    } else if (scrollY !== 0) {
      header.style.setProperty('--top-strip-height', topStripHeight)
      navbarLogo.style.transform = `scale(${logoScale})`
      navbarLogo.style.bottom = logoTranslateY + 'px'
    } else {
      header.style.setProperty('--top-strip-height', topStripHeight)
      navbarLogo.style.transform = 'none'
      navbarLogo.style.bottom = '0'
    }
  }

  headerTransform()

  onscroll = onresize = headerTransform

  /* Header Menu Button */

  navbarMenuBtn.onclick = () => navbarMenuBtn.classList.toggle('active')

  navbarNavListLinks.forEach(
    link => link.onclick = () => navbarMenuBtn.classList.remove('active')
  )

  /* Sliders */

  new Swiper('.locale__slider', {
    slidesPerView: 3,
    spaceBetween: 60,
    pagination: {
      el: '.locale__pagination',
      clickable: true
    },
    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
    },
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: '.locale__pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.locale__next-btn',
      prevEl: '.locale__prev-btn'
    }
  })

  new Swiper('.works__slider', {
    slidesPerView: 3,
    spaceBetween: 60,
    pagination: {
      el: '.works__pagination',
      clickable: true
    },
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: '.works__pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.works__next-btn',
      prevEl: '.works__prev-btn'
    }
  })
}

/* Yandex Maps API */

ymaps.ready(() => {

  const

    map = new ymaps.Map('map', {
      center: [44.896350, 34.057387],
      zoom: 16
    }),

    placemark = new ymaps.Placemark(map.getCenter(), {
      hintContent: 'ул. Озенбашская, 2А',
      balloonContent: 'Service Gas Crimea'
    }, {
      iconLayout: 'default#image',
      iconImageHref: 'img/pin.svg',
      iconImageSize: [70, 91],
      iconImageOffset: [-30, -90]
    })

  map.geoObjects
    .add(placemark)

})