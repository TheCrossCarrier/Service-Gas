const
  navbar = document.querySelector('.navbar'),
  navbarLogo = document.querySelector('.navbar .logo')

onload = () => {

  /* Navbar Logo Scroll Transformations */

  const
    navbarHeight = navbar.getBoundingClientRect().height,
    logoSize = navbarLogo.getBoundingClientRect().height

  const
    logoScale = navbarHeight / logoSize,
    logoTranslateY = (1 - logoScale) * logoSize / -2

  function logoTransform() {
    if (scrollY !== 0) {
      navbarLogo.style.transform = `scale(${logoScale})`
      navbarLogo.style.bottom = logoTranslateY + 'px'
    } else {
      navbarLogo.style.transform = 'none'
      navbarLogo.style.bottom = '0'
    }
  }

  logoTransform()

  onscroll = logoTransform
}

/* Yandex Maps API */

ymaps.ready(() => {

  const

    map = new ymaps.Map('map', {
      center: [44.896350, 34.057387],
      zoom: 16
    })

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