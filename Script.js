
document.querySelector('.menu-toggle').addEventListener('click', () => {
  const menu = document.querySelector('.menu');
  menu.style.display = (menu.style.display === 'flex') ? 'none' : 'flex';
});

document.addEventListener('click', (event) => {
  const menu = document.querySelector('.menu');
  const menuToggle = document.querySelector('.menu-toggle');

  // Αν το κλικ δεν έγινε στο μενού ή στο κουμπί του μενού, το κλείνουμε
  if (!menu.contains(event.target) && event.target !== menuToggle) {
    menu.style.display = 'none';
  }
});

// για το μενού να κλείνει
document.querySelectorAll('.menu a').forEach(item => {
  item.addEventListener('click', () => {
    document.querySelector('.menu').style.display = 'none';
  });
});




//top 

  const scrollToTopBtn = document.getElementById("scrollToTopBtn");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  });

  scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
