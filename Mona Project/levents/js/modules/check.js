export default function check() {
  var evt = document.createEvent('HTMLEvents');
  evt.initEvent('change', false, true);
  let btn = document.querySelectorAll('.checkJS');
  btn.forEach((el) => {
    let inp = el.querySelector('input');
    let lab = el.querySelector('label');
    lab.addEventListener('click', function (e) {
      e.preventDefault();
      inp.checked = !inp.checked;
      btn.forEach((el2) => {
        let inp2 = el2.querySelector('input');
        inp2.dispatchEvent(evt);
      });
    });
    inp.addEventListener('change', () => {
      if (inp.checked) {
        lab.classList.add('active');
      } else {
        lab.classList.remove('active');
      }
    });
  });

  let mb = document.querySelector('.checkBtn');
  let info = document.querySelectorAll('.checkInfo');
  if (mb) {
    mb.addEventListener('click', () => {
      info.forEach((el) => {
        el.classList.toggle('active');
      });
    });
  }
}
