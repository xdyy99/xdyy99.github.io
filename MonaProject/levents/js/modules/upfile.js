export default function upfile() {
  let file = document.querySelectorAll('.fileJS');
  file.forEach((el) => {
    let inp = el.querySelector('.fileInp');
    let txt = el.querySelector('.fileTxt');

    inp.addEventListener('change', () => {
      txt.innerHTML = inp.value;
    });
  });

  let ava = document.querySelectorAll('.fileAva');
  ava.forEach((el) => {
    let inp = el.querySelector('.fileInp');
    let img = el.querySelector('.fileImg');
    inp.addEventListener('change', () => {
      img.setAttribute('src', inp.value);
    });
  });
}
