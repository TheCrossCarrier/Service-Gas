const
  header = document.querySelector('.header'),
  navbar = document.querySelector('.navbar'),
  navbarLogo = document.querySelector('.navbar .logo'),
  navbarMenuBtn = document.querySelector('.navbar__collapse-btn'),
  navbarNavList = document.querySelector('.navbar__nav-list'),
  navbarNavListLinks = document.querySelectorAll('.navbar .nav-list__link')

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

    /* Header Menu Button */

    navbarMenuBtn.onclick = () => navbarMenuBtn.classList.toggle('active')

    Array.from(navbarNavListLinks).forEach(
      link => link.onclick = () => navbarMenuBtn.classList.remove('active')
    )

  }

  headerTransform()

  onscroll = onresize = headerTransform
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