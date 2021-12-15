export default function mypop() {
  let panel = document.querySelectorAll('.mpPanel');
  let btn = document.querySelectorAll('.mpBtn');

  btn.forEach((el) => {
    el.addEventListener('click', () => {
      let key = el.getAttribute('data-type');
      el.classList.toggle('active');

      panel.forEach((el1) => {
        let lock = el1.getAttribute('data-type');

        if (key === lock) {
          el1.classList.toggle('active');
        } else {
          el.classList.remove('active');
          el1.classList.remove('active');
        }
      });
    });
  });
  document.addEventListener('click', function (e) {
    let cPanel = e.target.closest('.mpPanel');
    let cBtn = e.target.closest('.mpBtn');
    if (cPanel == null && cBtn == null) {
      btn.forEach((el) => {
        el.classList.remove('active');
      });
      panel.forEach((el) => {
        el.classList.remove('active');
      });
    }
  });
}
