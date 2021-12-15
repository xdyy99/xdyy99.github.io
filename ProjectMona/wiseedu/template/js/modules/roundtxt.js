export default function round() {
  let btn = document.querySelectorAll('.roundJS');
  btn.forEach((v) => {
    let a = v.textContent.length;

    let four = `` + v.textContent + `` + v.textContent + `` + v.textContent + `` + v.textContent;
    let arr = four.split('');
    v.innerHTML = '';
    arr.forEach((av, ai) => {
      let check = ai % a;

      if (check == 0) {
        v.innerHTML += `<div class="letter"> </div>`;
        v.innerHTML += `<div class="letter head"> </div>`;
        v.innerHTML += `<div class="letter">` + av + `</div>`;
      } else {
        v.innerHTML += `<div class="letter">` + av + `</div>`;
      }
    });
    let letter = v.querySelectorAll('.letter');
    letter.forEach((lv, li) => {
      let deg = (360 / letter.length) * li;
      lv.style.transform = `translate(-50%,-50%) rotate(` + deg + `deg)`;
    });
  });
}
