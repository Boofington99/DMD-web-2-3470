// button go up
const backToTopBtn = document.getElementById("backToTopBtn");

window.onscroll = function () {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
};

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

  
  // Smooth scroll to section
  document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 50,
          behavior: 'smooth'
        });
      }
    });
  });