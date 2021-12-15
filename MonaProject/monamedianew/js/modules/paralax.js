export default function paralax() {
  let img = document.querySelectorAll('.prlImg');
  img.forEach((el, i) => {
    window.addEventListener('scroll', () => {
      let pos = (window.scrollY - el.getBoundingClientRect().top) * ((1 / ((i % 4) + 1)) * 0.3) * 0.1;
      let deg = Math.floor(Math.random() * 20);

      if (0 < el.getBoundingClientRect().top && el.getBoundingClientRect().top < window.innerHeight)
        el.style.transform = `translate(-50%,calc( -50% + ` + pos + `px)) rotate(` + deg + `deg)`;
    });
  });
}
