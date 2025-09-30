document.addEventListener("DOMContentLoaded", () => {
  // === HEADER FADE-IN ANIMATION ===
  const header = document.querySelector("header");
  header.style.opacity = 0;
  header.style.transform = "translateY(-20px)";
  setTimeout(() => {
    header.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    header.style.opacity = 1;
    header.style.transform = "translateY(0)";
  }, 100);

  // === SCROLL-IN ANIMATIONS USING INTERSECTION OBSERVER ===
  const revealElements = document.querySelectorAll("section");

  const observerOptions = {
    root: null, // observes intersections relative to the viewport
    rootMargin: "0px",
    threshold: 0.1, // trigger when 10% of the element is visible
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // Stop observing once it's visible
      }
    });
  }, observerOptions);

  // Add the 'reveal' class to all sections and start observing them
  revealElements.forEach((el) => {
    el.classList.add("reveal");
    observer.observe(el);
  });
});
