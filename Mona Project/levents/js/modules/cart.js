export default function cart() {
  // Cart control //
  let cart = document.querySelector('.cartJS');
  let cBtn = document.querySelector('.cartBtn');
  let cOff = document.querySelector('.cartClose');
  let cBg = document.querySelector('.cartBg');

  cBtn.addEventListener('click', cartOn);
  cBg.addEventListener('click', cartOff);
  cOff.addEventListener('click', cartOff);
  function cartOn() {
    cart.classList.toggle('active');
    document.querySelector('body').classList.toggle('no-scroll-cart');
  }
  function cartOff() {
    cart.classList.remove('active');
    document.querySelector('body').classList.remove('no-scroll-cart');
  }

  // Cart quantity //
  // function cartQty() {
  //   let cartAmo = document.querySelectorAll('.amoJS');
  //   let defAmount = 1;
  //   cartAmo.forEach((v) => {
  //     let cMinus = v.querySelector('.amoM');
  //     let cPlus = v.querySelector('.amoP');
  //     let cValue = v.querySelector('.amoVal');

  //     cMinus.addEventListener('click', () => {
  //       cValue.value === NaN || cValue.value <= cValue.min || cValue.value > cValue.max ? (cValue.value = defAmount) : cValue.value--;
  //       $(cValue).trigger('change');
  //     });
  //     cPlus.addEventListener('click', () => {
  //       cValue.value === NaN || cValue.value >= cValue.max || cValue.value < cValue.min ? (cValue.value = defAmount) : cValue.value++;
  //       $(cValue).trigger('change');
  //     });
  //   });
  // }
  // cartQty();
}
