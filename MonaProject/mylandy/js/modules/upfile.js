export default function upfile() {
  let file = document.querySelectorAll('.fileJS');
  file.forEach((el) => {
    let inp = el.querySelector('.fileInp');
    let txt = el.querySelector('.fileTxt');

    inp.addEventListener('change', () => {
      let upname = inp.value.split(`\\`);
      let name = upname[upname.length - 1];
      txt.innerHTML = name;
    });
  });
}
