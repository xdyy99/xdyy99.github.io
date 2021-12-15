export default function password() {
  let showP = document.querySelectorAll('.showJS');
  showP.forEach((el) => {
    let inp = el.querySelector('.showInp');
    let btn = el.querySelector('.showBtn');
    let show = true;

    btn.addEventListener('click', () => {
      show ? (inp.type = 'text') : (inp.type = 'password');
      btn.classList.toggle('active');
      show = !show;
    });
  });
  let log = document.querySelector('.logJS');
  if (log) {
    let btn = log.querySelectorAll('.logBtn');
    let panel = log.querySelectorAll('.logPanel');
    panel[0].classList.add('active');
    btn.forEach((el, i) => {
      el.addEventListener('click', () => {
        let pos = el.offsetLeft;
        document.documentElement.style.setProperty('--logP', `${pos}px`);
        panel[i].classList.add('active');
        for (let a = 0; a <= btn.length; a++) {
          if (a != i) {
            panel[a].classList.remove('active');
          }
        }
      });
    });
  }
}
