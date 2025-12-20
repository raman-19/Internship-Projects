// Toggle mobile menu
function toggleMenu() {
  document.querySelector('.nav').classList.toggle('active');
}

// Smooth scroll
document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', function(e){
    const target = document.querySelector(this.getAttribute('href'));
    if(target){
      e.preventDefault();
      target.scrollIntoView({behavior: 'smooth'});
    }
  });
});
