<script>
  const toggleButton = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.menu');

  toggleButton.addEventListener('click', () => {
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
  });
</script>
