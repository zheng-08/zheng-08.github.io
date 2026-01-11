const lazyImages = document.querySelectorAll("img[data-src]");

const loadImg = (img) => {
  img.src = img.dataset.src;
  img.onload = () => img.classList.add("loaded");
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      loadImg(entry.target);
      observer.unobserve(entry.target);
    }
  });
});

lazyImages.forEach((img) => observer.observe(img));
