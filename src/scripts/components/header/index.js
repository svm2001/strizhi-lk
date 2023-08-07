export function header() {
  const burgerBtnOpen = document.querySelector('.btn__burger');
  const burgerBtnClose = document.querySelector('.btn__burger-close ');
  const logo = document.querySelector('.lk-header__logo');
  const container = document.querySelector('.lk-header-main .container__2');
  const burgerMenu = document.querySelector('.burger__menu');
  const body = document.querySelector('body');
  const tabletBtnOpen = document.querySelector('.btn__menuTabletShow');

  if(tabletBtnOpen) {
    tabletBtnOpen.addEventListener('click', () => {
      tabletBtnOpen.classList.add('hide');
    })
  }


  function open() {
    burgerBtnOpen.classList.add('active')
    logo.classList.add('active');
    burgerBtnClose.classList.add('active')
    container.classList.add('between')
    burgerMenu.classList.add('active');
    body.classList.add('fixed');
  }

  function close () {
    burgerBtnOpen.classList.remove('active')
    logo.classList.remove('active');
    burgerBtnClose.classList.remove('active')
    container.classList.remove('between')
    burgerMenu.classList.remove('active')
    body.classList.remove('fixed');
  }

  if(burgerBtnOpen) {
    burgerBtnOpen.addEventListener('click', () => {
      open();
    })
  }
  if(burgerBtnClose) {
    burgerBtnClose.addEventListener('click', () => {
      close();
    })
  }
}
