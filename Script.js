const revealItems = document.querySelectorAll(
  ".section-heading, .about-card, .skill-box, .project-card, .lab-card, .contact-box"
);

revealItems.forEach((item) => {
  item.classList.add("reveal");
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.12,
  }
);

revealItems.forEach((item) => {
  observer.observe(item);
});
