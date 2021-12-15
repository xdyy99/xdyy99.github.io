export default function createScrollTop() {
  const scrollTopBtn = document.querySelector('.backToTop');
  if (scrollTopBtn) {
    const scrollTop = () => {
      if (pageYOffset > 0) {
        window.scrollTo(0, pageYOffset - pageYOffset / 8);
        requestAnimationFrame(scrollTop);
      }
    };

    scrollTopBtn.addEventListener('click', scrollTop);
  }
}
