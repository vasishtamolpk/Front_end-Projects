// Get the navigation links
const navLinks = document.querySelectorAll('nav a');

// Add an active class to the clicked link
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.forEach(navLink => navLink.classList.remove('active'));
    link.classList.add('active');
  });
});
