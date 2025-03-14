document.addEventListener("DOMContentLoaded", () => {
  // Smooth scroll functionality
  document.querySelector(".scroll-down").addEventListener("click", () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  });

  // Lazy loading for images
  const images = document.querySelectorAll(".gallery-img");
  const imageOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px 50px 0px",
  };

  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.style.opacity = "1";
        observer.unobserve(img);
      }
    });
  }, imageOptions);

  images.forEach((img) => {
    img.style.opacity = "0";
    img.style.transition = "opacity 0.5s ease-in-out";
    imageObserver.observe(img);
  });

  // Add parallax effect to hero section
  window.addEventListener("scroll", () => {
    const hero = document.querySelector(".hero");
    const scrolled = window.pageYOffset;
    hero.style.backgroundPositionY = scrolled * 0.5 + "px";
  });

  // Random Arabic pattern rotation on hover
  const arabicPattern = document.querySelector(".arabic-pattern");
  arabicPattern.addEventListener("mousemove", (e) => {
    const x = e.clientX / window.innerWidth - 0.5;
    const y = e.clientY / window.innerHeight - 0.5;

    arabicPattern.style.transform = `rotate(${x * 10}deg) scale(${
      1 + Math.abs(y) * 0.1
    })`;
  });

  arabicPattern.addEventListener("mouseleave", () => {
    arabicPattern.style.transform = "rotate(0deg) scale(1)";
  });
});
