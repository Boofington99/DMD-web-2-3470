const scrollBtn = document.getElementById("scrollToTopBtn");

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
      scrollBtn.classList.add("show");
    } else {
      scrollBtn.classList.remove("show");
    }
  });

  scrollBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
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

  // bouncing
  const priceText = document.getElementById("price-bounce");
  const letters = priceText.textContent.trim().split("");
  priceText.textContent = "";
  letters.forEach((letter, index) => {
    const span = document.createElement("span");
    span.textContent = letter;
    span.className = "bounce-letter";
    span.style.animationDelay = `${index * 0.1}s`;
    priceText.appendChild(span);
  });

