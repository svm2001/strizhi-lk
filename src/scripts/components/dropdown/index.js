export function dropdown () {
  const dropdowns = document.querySelectorAll('.dropdown');

  let tabletMenuFullBtnSwitcher = 0;

  const tabletMenuFullBtn = document.querySelector('.menu_openFull');
  const menuTabletShow = document.querySelector('.btn__menuTabletShow');
  const mainPart = document.querySelector('.deals__main')

  if(window.innerWidth <= 680) {
    if(document.querySelector('.dropdown.disabled.menu-side')) {
      document.querySelector('.dropdown.disabled.menu-side').classList.remove('disabled')
    }
  }

  if(window.innerWidth <= 991) {
    if(document.querySelector('.side-menu')) {
      document.querySelector('.side-menu').classList.add('small-tablet');
    }
  }

  dropdowns.forEach(dropdown => {
    if(dropdown.classList.contains('disabled')) {

    } else {
      const select = dropdown.querySelector('.select');
      const caret = dropdown.querySelector('.caret');
      const menu = dropdown.querySelector('.menu');
      const options = dropdown.querySelectorAll('.menu a');
      const selected = dropdown.querySelector('.selected');


      select.addEventListener('click', () => {
        select.classList.toggle('clicked');
        caret.classList.toggle('rotate');
        menu.classList.toggle('open');
        mainPart.classList.toggle('open');
      });

      options.forEach(option => {
        option.addEventListener('click', () => {
          selected.innerHTML = option.innerHTML;
          select.classList.remove('clicked');
          caret.classList.remove('rotate');
          menu.classList.remove('open');
          mainPart.classList.remove('open');

          options.forEach(option => {
            option.classList.remove('active');
          });
          option.classList.add('active');
        });
      });
    }
  });

  if(menuTabletShow) {
    menuTabletShow.addEventListener('click', (e) => {
      menuTabletShow.classList.add('hide');
      tabletMenuFullBtn.style.display = 'block';
      document.querySelector('.side-menu').classList.add('open');
      mainPart.classList.add('open');
      document.querySelector('body').classList.add('overflow')
    })
  }

  if(tabletMenuFullBtn) {
    tabletMenuFullBtn.addEventListener('click', (e) => {
      tabletMenuFullBtn.classList.toggle('open')
      if(tabletMenuFullBtnSwitcher === 0) {
        tabletMenuFullBtnSwitcher = 1
        menuTabletShow.classList.add('hide');
        tabletMenuFullBtn.style.display = 'block';
        document.querySelector('.side-menu').classList.add('open');
        mainPart.classList.add('open');
        document.querySelector('body').classList.add('overflow')
      } else {
        tabletMenuFullBtnSwitcher = 0
        menuTabletShow.classList.remove('hide');
        document.querySelector('.side-menu').classList.remove('open');
        mainPart.classList.remove('open');
        document.querySelector('body').classList.remove('overflow')
      }
    })
  }

  function CloseTabletMenu() {
    menuTabletShow.classList.remove('hide');
    document.querySelector('.side-menu').classList.remove('open');
    mainPart.classList.remove('open');
    document.querySelector('body').classList.remove('overflow')
    tabletMenuFullBtnSwitcher = 0;
    tabletMenuFullBtn.classList.remove('open')


  }

  document.addEventListener('click', (e) => {
    if(menuTabletShow) {
      if (menuTabletShow.classList.contains('hide') && e.target === mainPart) {
        CloseTabletMenu();
      }
    }
    if(document.querySelector('.side-menu .select')) {
      if(document.querySelector('.side-menu .select').classList.contains('clicked') && e.target === mainPart) {
        console.log(e.target)
        mainPart.classList.remove('open');
        document.querySelector('.side-menu .select').classList.remove('clicked');
        document.querySelector('.side-menu .caret').classList.remove('rotate');
        document.querySelector('.side-menu .menu').classList.remove('open')
      }
    }
  })
}
