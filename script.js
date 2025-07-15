// script.js

// Wait until the page is fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Grab the menu button and the navbar
  var menuToggle = document.getElementById('menu-toggle');
  var navbar     = document.getElementById('navbar');

  // When button is clicked...
  menuToggle.addEventListener('click', function() {
    // Toggle the "open" class on the navbar
    // CSS shows/hides the menu based on this class
    if (navbar.classList.contains('open')) {
      navbar.classList.remove('open');
    } else {
      navbar.classList.add('open');
    }
  });

  // Optional: close menu when clicking a link (mobile)
  var links = navbar.querySelectorAll('a');
  links.forEach(function(link) {
    link.addEventListener('click', function() {
      // Remove "open" so menu collapses after selection
      navbar.classList.remove('open');
    });
  });
});

// === Theme Toggle Logic ===
document.addEventListener('DOMContentLoaded', function () {
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;

  // Load theme from localStorage
  if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark');
  }

  // Toggle theme on click
  themeToggle.addEventListener('click', function () {
    body.classList.toggle('dark');
    // Save preference
    if (body.classList.contains('dark')) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
  });
});

