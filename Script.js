const toggleButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

toggleButton.addEventListener('click', () => {
  const currentDisplay = window.getComputedStyle(menu).display;
  menu.style.display = currentDisplay === 'none' ? 'flex' : 'none';
});
