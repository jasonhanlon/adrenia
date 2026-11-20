const header = document.querySelector('.site-header');
const menus = [...header.querySelectorAll('nav details')];
const updateHeader = () => header.classList.toggle('is-scrolled', window.scrollY > 32);
const closeMenus = (except) => menus.forEach(menu => { if (menu !== except) menu.open = false; });
updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });
menus.forEach(menu => {
  menu.querySelector('summary').addEventListener('click', () => closeMenus(menu));
  menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => closeMenus()));
});
document.addEventListener('click', event => {
  if (!menus.some(menu => menu.contains(event.target))) closeMenus();
});
document.addEventListener('keydown', event => {
  if (event.key !== 'Escape') return;
  const open = menus.find(menu => menu.open);
  if (!open) return;
  closeMenus();
  open.querySelector('summary').focus();
});
