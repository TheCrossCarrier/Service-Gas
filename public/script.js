const
  root = document.querySelector(':root'),
  navbar = document.querySelector('.navbar'),
  navbarLogo = document.querySelector('.navbar .logo')

/* Navbar Logo Scroll Transformations */

const
  navbarHeight = navbar.getBoundingClientRect().height,
  logoSize = navbarLogo.getBoundingClientRect().height

const
  logoScale = navbarHeight / logoSize,
  logoTranslateY = (1 - logoScale) * logoSize / -2

onscroll = () => {
  if (scrollY !== 0) {
    navbarLogo.style.transform = `scale(${logoScale})`
    navbarLogo.style.bottom = logoTranslateY + 'px'
  } else {
    navbarLogo.style.transform = ''
    navbarLogo.style.bottom = 0
  }
}
