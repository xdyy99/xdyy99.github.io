export default function active() {
  let aPanel = document.querySelectorAll('.actPanel');
  aPanel.forEach((v) => {
    let aBtn = v.querySelector('.actBtn');
    aBtn.addEventListener('click', () => {
      v.classList.toggle('active');
    });
    let close = v.querySelector('.actClose');
    if (close) {
      close.addEventListener('click', () => {
        v.classList.remove('active');
      });
    }
    document.addEventListener('click', function (e) {
      let aCheck = e.target.closest('.actPanel');
      if (aCheck !== v) {
        v.classList.remove('active');
      }
    });
  });

  let list = document.querySelectorAll('.lmWrap');
  list.forEach((v) => {
    let btn = v.querySelector('.lmBtn');
    btn.addEventListener('click', () => {
      v.classList.toggle('active');
    });
  });

  let la = document.querySelectorAll('.laBtn');
  la.forEach((v, i) => {
    v.addEventListener('click', () => {
      v.classList.add('active');
      la.forEach((v2, i2) => {
        if (i2 != i) {
          v2.classList.remove('active');
        }
      });
    });
  });
}
