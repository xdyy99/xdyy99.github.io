export default function phone() {
  let phone = document.querySelectorAll('.phone');
  let valueBtn = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '*', '0', '#'];
  phone.forEach((el) => {
    let scr = el.querySelector('.phoneScr');
    let btn = el.querySelectorAll('.phoneBtn');
    let call = el.querySelector('.phoneCall');

    let del = el.querySelector('.phoneDel');
    let link = '';

    scr.addEventListener('change', () => {
      let realLink = scr.value.split(' ');
      link = '';
      realLink.forEach((el) => {
        link += el;
      });
      call.setAttribute('href', 'tel:' + link);
      scr.value = link;
      let format = scr.value.split('');
      scr.value = '';
      format.forEach((el, i) => {
        scr.value += el;
        if ((i + 1) % 3 === 0) {
          scr.value += ' ';
        }
      });
    });
    // add
    btn.forEach((el1, i1) => {
      el1.addEventListener('click', () => {
        // check add space
        let format = scr.value.split('');
        if (format.length % 4 === 3) {
          scr.value += ' ';
        }

        // add number
        scr.value += valueBtn[i1];

        // add link
        link += valueBtn[i1];
        call.setAttribute('href', 'tel:' + link);
      });
    });
    // reset call
    call.addEventListener('click', () => {
      setTimeout(() => {
        scr.value = '';
        link = '';
        call.setAttribute('href', 'tel:');
      }, 100);
    });

    // del
    del.addEventListener('click', () => {
      // delete last index
      scr.value = scr.value.slice(0, -1);

      // check del space
      let format = scr.value.split('');
      if (format.length % 4 === 0) {
        scr.value = scr.value.slice(0, -1);
      }

      // del link
      link = link.slice(0, -1);
      call.setAttribute('href', 'tel:' + link);
    });
  });
}
