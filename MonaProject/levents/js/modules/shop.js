export default function shop() {
  let btn = document.querySelectorAll('.shopOp');
  let panel = document.querySelectorAll('.shopHid');
  btn.forEach((el, i) => {
    el.addEventListener('click', () => {
      el.classList.toggle('active');
      panel[i].classList.toggle('active');
    });
  });
}
