export default function active() {
  let aPanel = document.querySelectorAll('.actPanel');
  aPanel.forEach((v) => {
    let aBtn = v.querySelector('.actBtn');
    aBtn.addEventListener('click', () => {
      v.classList.toggle('active');
    });
    document.addEventListener('click', function (e) {
      let aCheck = e.target.closest('.actPanel');
      if (aCheck !== v) {
        v.classList.remove('active');
      }
    });
  });

  let faq = document.querySelectorAll('.faqBtn');
  faq.forEach((el) => {
    el.addEventListener('click', () => {
      el.classList.toggle('active');
    });
  });

  // Mở/tắt popup
  let html = document.querySelector('html');
  let overlayBg = document.querySelector('.overlay-bg');
  if (overlayBg) {
    overlayBg.addEventListener('click', function () {
      closePopup();
    });
  }

  let popExchange = document.querySelector('.pop-exchange');
  let btnPopExchange = document.querySelectorAll('.btn-pop-exchange');
  btnPopExchange.forEach((el) => {
    el.addEventListener('click', function () {
      popExchange.classList.add('visible');
      overlayBg.classList.add('visible');
      html.classList.add('stop-scroll');
    });
  });

  let popThankYou1 = document.querySelector('.pop-thankyou1');
  let btnPopThankYou1 = document.querySelectorAll('.btn-pop-thankyou1');
  btnPopThankYou1.forEach((el) => {
    el.addEventListener('click', function () {
      popThankYou1.classList.add('visible');
      overlayBg.classList.add('visible');
      html.classList.add('stop-scroll');
    });
  });

  let popThankYou2 = document.querySelector('.pop-thankyou2');
  let btnPopThankYou2 = document.querySelectorAll('.btn-pop-thankyou2');

  btnPopThankYou2.forEach((el) => {
    el.addEventListener('click', function () {
      popThankYou2.classList.add('visible');
      overlayBg.classList.add('visible');
      html.classList.add('stop-scroll');
    });
  });

  let popMember = document.querySelector('.pop-member');
  let btnPopMember = document.querySelectorAll('.btn-pop-member');
  btnPopMember.forEach((el) => {
    el.addEventListener('click', function () {
      popMember.classList.add('visible');
      overlayBg.classList.add('visible');
      html.classList.add('stop-scroll');
    });
  });

  let popMemberShip = document.querySelector('.pop-membership');
  let btnPopMemberShip = document.querySelectorAll('.btn-pop-membership');
  btnPopMemberShip.forEach((el) => {
    el.addEventListener('click', function () {
      popMemberShip.classList.add('visible');
      overlayBg.classList.add('visible');
      html.classList.add('stop-scroll');
    });
  });

  // Close popup trên mobile

  let btnClose = document.querySelectorAll('.btn-close');
  btnClose.forEach(function (element) {
    element.addEventListener('click', function () {
      closePopup();
    });
  });

  let popUp = document.querySelectorAll('.popup');
  function closePopup() {
    popUp.forEach(function (element) {
      element.classList.remove('visible');
    });
    overlayBg.classList.remove('visible');
    html.classList.remove('stop-scroll');
  }
}
