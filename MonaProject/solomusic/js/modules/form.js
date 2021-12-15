export default function form() {
  let inp = document.querySelectorAll('input');
  inp.forEach((el) => {
    let wrap = el.parentElement;
    el.value ? wrap.classList.add('active') : '';
    el.addEventListener('change', () => {
      el.value ? wrap.classList.add('active') : wrap.classList.remove('active');
      el.value ? el.classList.add('active') : el.classList.remove('active');
    });
    el.addEventListener('focusin', () => {
      wrap.classList.add('active');
    });
    el.addEventListener('focusout', () => {
      el.value ? '' : wrap.classList.remove('active');
    });
  });

}
