export default function active() {
  let btn = document.querySelectorAll('.actBtn');
  btn.forEach((el) => {
    el.addEventListener('click', () => {
      el.classList.toggle('active');
    });
  });

  let vid = document.querySelectorAll('.videoJS');
  vid.forEach((el) => {
    let vbtn = el.querySelector('.videoBtn');
    let vmain = el.querySelector('.videoMain');
    vbtn.addEventListener('click', () => {
      vmain.play();
      vmain.setAttribute('controls', 'controls');
      vbtn.classList.add('hide');
    });
  });

  let sbtn = document.querySelector('.sbBtn');
  let smain = document.querySelector('.sbMain');
  if (sbtn && smain) {
    sbtn.addEventListener('click', () => {
      smain.classList.toggle('active');
    });
  }

  let file = document.querySelectorAll('.avaJS');
  file.forEach((el) => {
    let inp = el.querySelector('.inpJS');
    let img = el.querySelector('.imgJS');

    inp.addEventListener('change', () => {
      const [file] = inp.files;
      if (file) {
        img.src = URL.createObjectURL(file);
      }
    });
  });
}
