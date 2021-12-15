export default function active() {
  let aPanel = document.querySelectorAll('.actPanel');
  let aBtn = document.querySelectorAll('.actBtn');

  aBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
      let key = btn.getAttribute('data-act');
      btn.classList.toggle('active');

      aPanel.forEach((el) => {
        let lock = el.getAttribute('data-act');

        if (key === lock) {
          el.classList.toggle('active');
        } else {
          btn.classList.remove('active');
          el.classList.remove('active');
        }
      });
    });
  });
  document.addEventListener('click', function (e) {
    let cPanel = e.target.closest('.actPanel');
    let cBtn = e.target.closest('.actBtn');
    if (cPanel == null && cBtn == null) {
      aBtn.forEach((el) => {
        el.classList.remove('active');
      });
      aPanel.forEach((el) => {
        el.classList.remove('active');
      });
    }
  });

  // mobile search
  let serBtn = document.querySelector('.serMbBtn');
  let serBox = document.querySelector('.serMbBox');
  let serClo = document.querySelector('.serMbClose');
  if (window.innerWidth <= 480 && serBtn) {
    serBtn.addEventListener('click', () => {
      serBox.classList.add('active');
      document.querySelector('body').classList.add('no-scroll-ser');
    });
    serClo.addEventListener('click', () => {
      serBox.classList.remove('active');
      document.querySelector('body').classList.remove('no-scroll-ser');
    });
  }

  // mobile footer
  let footBtn = document.querySelectorAll('.ftBtn');
  let footBox = document.querySelectorAll('.ftBox');
  footBox.forEach((el, i) => {
    let active = false;
    footBtn[i].addEventListener('click', () => {
      let _h = el.querySelector('.ftCon').offsetHeight;
      if (active) {
        el.style.height = `0`;
        el.style.margin = `0`;
      } else {
        el.style.height = _h + `px`;
        el.style.margin = `0 0 15px`;
      }
      active = !active;
    });
  });

  let ftLim = document.querySelector('.ft__top .con').offsetHeight;
  let limWrap = document.querySelector('.ft__lim');
  if (limWrap && window.innerWidth > 1200) {
    limWrap.style.position = `relative`;
    if (ftLim > limWrap.offsetHeight);
    {
      let max = limWrap.offsetHeight;

      limWrap.style.height = ftLim + `px`;
      limWrap.style.padding = `0 0 20px`;
      limWrap.innerHTML += `<div class="ft__btn__more">Readmore</div>`;

      let limBtn = document.querySelector('.ft__btn__more');
      limBtn.addEventListener('click', () => {
        limWrap.style.height = max + `px`;
        limWrap.style.padding = `0`;
        limBtn.style.display = 'none';
      });
    }
  }
}
