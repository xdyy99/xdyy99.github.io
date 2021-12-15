export default function qa() {
  let qa = document.querySelectorAll('.qaJS');
  qa.forEach((el) => {
    let btn = el.querySelectorAll('.qaBtn');
    let wrap = el.querySelectorAll('.qaWrap');
    btn[0].classList.toggle('active');
    wrap[0].classList.toggle('active');

    btn.forEach((b, i) => {
      b.addEventListener('click', () => {
        for (let a = 0; a < btn.length; a++) {
          if (a === i) {
            btn[a].classList.toggle('active');
            wrap[a].classList.toggle('active');
          } else {
            btn[a].classList.remove('active');
            wrap[a].classList.remove('active');
          }
        }
      });
    });
  });
}
