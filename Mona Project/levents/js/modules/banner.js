export default function banner() {
  function abc() {
    if (window.innerWidth > 1200) {
      let ban = document.querySelectorAll('.banJS');
      ban.forEach((el) => {
        let img = el.querySelector('.banPRL');
        window.addEventListener('scroll', () => {
          let pos = el.getBoundingClientRect().top;
          if (pos >= 0 && pos < window.innerHeight) {
            let _top = (pos / 3 / img.offsetHeight) * 100;
            img.style.top = _top + 50 + `%`;
          }
        });
      });
    }
  }
  abc();
}
