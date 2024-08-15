const DrawerInitiator = () => {
  const menu = document.querySelector('.nav_menu');
  const humburgerMenu = document.querySelector('.hamburger-menu');
  const iconBars = document.querySelector('.icon-bars');
  const iconClose = document.querySelector('.icon-close');

  function displayMenu() {
    if (menu.classList.contains('tampil')) {
      menu.classList.remove('tampil');
      iconBars.style.display = 'inline';
      iconClose.style.display = 'none';
    } else {
      menu.classList.add('tampil');
      iconBars.style.display = 'none';
      iconClose.style.display = 'inline';
    }
  }

  humburgerMenu.addEventListener('click', displayMenu);
  menu.addEventListener('click', displayMenu);

  document.addEventListener('click', (event) => {
    const isClickInsideMenu = menu.contains(event.target);
    const isClickInsideHamburgerMenu = humburgerMenu.contains(event.target);
    if (!isClickInsideMenu && !isClickInsideHamburgerMenu) {
      menu.classList.remove('tampil');
      iconBars.style.display = 'inline';
      iconClose.style.display = 'none';
    }
  });
};

export default DrawerInitiator;
