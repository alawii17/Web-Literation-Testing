function updateNavbarAndFooterVisibility() {
  const navbar = document.getElementById('navbar');
  const footer = document.getElementById('footer');
  const currentHash = window.location.hash;

  if (currentHash === '#/register' || currentHash === '#/login') {
    if (navbar) navbar.style.display = 'none';
    if (footer) footer.style.display = 'none';
  } else {
    if (navbar) navbar.style.display = '';
    if (footer) footer.style.display = '';
  }
}

export default updateNavbarAndFooterVisibility;
