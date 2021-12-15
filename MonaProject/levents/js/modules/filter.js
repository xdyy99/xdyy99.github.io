export default function filter() {
  let fil = document.querySelector('.filterJS');
  if (fil) {
    let btn = fil.querySelector('.filterBtn');
    let panel = fil.querySelector('.filterPanel');
    let close = fil.querySelector('.filterClose');
    btn.addEventListener('click', () => {
      panel.classList.add('active');
    });
    close.addEventListener('click', () => {
      panel.classList.remove('active');
    });
    document.addEventListener('click', function (e) {
      let cBtn = e.target.closest('.filterBtn');
      let cPan = e.target.closest('.filterPanel');
      if (cPan == null && cBtn == null) {
        panel.classList.remove('active');
      }
    });

    let plus = fil.querySelectorAll('.filterPlus');
    let drop = fil.querySelectorAll('.filterDrop');
    plus.forEach((el, i) => {
      el.addEventListener('click', () => {
        el.classList.toggle('active');
        drop[i].classList.toggle('active');
      });
    });
  }
}
