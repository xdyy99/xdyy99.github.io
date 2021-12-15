export default function sMagic() {
  let lapA = document.querySelector('.lapAni');
  let lapW = document.querySelector('.lapWrap');

  if (lapA && window.innerWidth > 768) {
    // load img
    let imgs = parseInt(lapW.getAttribute('data-img-num'));
    for (let n = 0; n < imgs; n++) {
      let link = '000' + n;
      lapW.innerHTML += `<img src="./assets/laptop/large_` + link.slice(-4) + `.jpg"/>`;
    }
    let imgAni = lapW.querySelectorAll('img');

    //

    // defaute
    lapA.style.height = lapW.offsetHeight + 1200 + 'px';
    imgAni[0].style.opacity = '0';
    imgAni[1].style.opacity = '1';
    // check ani
    let a = lapA.getBoundingClientRect().top;
    if (a < 0 && a > -700) {
      // animate
      imgAni.forEach((el) => {
        el.style.opacity = '0';
      });
      let pos = Math.round(-(a / 700) * imgs);
      imgAni[pos].style.opacity = '1';

      lapW.classList.remove('end');
    } else if (a <= -700) {
      //end
      lapW.classList.add('end');
      imgAni.forEach((el) => {
        el.style.opacity = '0';
      });
      imgAni[imgs - 1].style.opacity = '1';
    }

    //

    // scroll
    window.addEventListener('scroll', () => {
      let trigger = lapA.getBoundingClientRect().top;

      if (trigger < 0 && trigger > -700) {
        // animate
        imgAni.forEach((el) => {
          el.style.opacity = '0';
        });
        let pos = Math.round(-(trigger / 700) * imgs);
        imgAni[pos].style.opacity = '1';

        lapW.classList.remove('end');
      } else if (trigger <= -700) {
        imgAni.forEach((el) => {
          el.style.opacity = '0';
        });
        imgAni[imgs - 1].style.opacity = '1';
      }
      //end
      if (trigger <= -600) {
        lapW.classList.add('end');
      }
    });
  }
}
