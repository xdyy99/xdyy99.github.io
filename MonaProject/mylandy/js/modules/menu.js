export default function menu() {
  // Dropdown check //
  let dropdown = document.querySelectorAll('#menu-main-menu .dropdown');
  dropdown.forEach((el) => {
    el.classList.add('subBtn');
    el.innerHTML += `<div class="submenu__btn hov-df"><img src="./assets/images/svg/arr-ic.svg" alt="" /></div>`;
  });

  // Menu resize mobile //
  let _hd = document.querySelector('.hdJS').offsetHeight;
  document.documentElement.style.setProperty('--headH', `${_hd}px`);
  window.addEventListener('resize', () => {
    let _vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${_vh}px`);
    let _hd2 = document.querySelector('.hdJS').offsetHeight;
    document.documentElement.style.setProperty('--headH', `${_hd2}px`);
  });

  // Menu control mobile //
  let menuBtn = document.querySelector('.menuBtn');
  let menu = document.querySelector('.menuBoard');
  let menuBg = document.querySelector('.menuBg');

  menuBtn.addEventListener('click', menuAct);
  menuBg.addEventListener('click', menuAct);
  function menuAct() {
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
    document.querySelector('body').classList.toggle('no-scroll');
  }
  document.addEventListener('click', function (e) {
    let mCheck = e.target.closest('.menuBoard');
    let bCheck = e.target.closest('.menuBtn');
    if (mCheck == null && bCheck == null) {
      menuBtn.classList.remove('active');
      menu.classList.remove('active');
      document.querySelector('body').classList.remove('no-scroll');
    }
  });

  // Submenu control mobile //
  let menuH = 0;
  document.documentElement.style.setProperty('--menuH', `${menuH}px`);
  let subBtn = document.querySelectorAll('.subBtn');
  let drop = document.querySelectorAll('#menu-main-menu .dropdown');
  subBtn.forEach((el, i) => {
    el.addEventListener('click', () => {
      subAct(i);
    });
  });
  function subAct(a) {
    drop.forEach((el, i) => {
      if (a === i) {
        el.classList.toggle('show');
        let b = el.querySelectorAll('.submenu li');
        let menuH = b.length * b[0].offsetHeight;
        document.documentElement.style.setProperty('--menuH', `${menuH}px`);
      } else {
        el.classList.remove('show');
      }
    });
  }

  // Submenu overflow //
  let subMenu = document.querySelectorAll('.submenu');
  subMenu.forEach((el) => {
    let subPos = el.getBoundingClientRect().left + el.offsetWidth;
    if (subPos > window.innerWidth) {
      el.classList.add('sub-over');
    }
  });

  //  Header small  //
  let header = document.querySelector('.hdJS');
  window.scrollY > 0 ? header.classList.add('small') : '';
  window.addEventListener('scroll', () => {
    window.scrollY > 0 ? header.classList.add('small') : header.classList.remove('small');
  });
}
