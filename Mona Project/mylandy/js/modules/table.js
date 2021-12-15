export default function table() {
  let btn = document.querySelectorAll('.tableBtn');
  btn.forEach((el) => {
    el.addEventListener('click', function (e) {
      let check = e.target.closest('.acc-table-info');
      if (!check) {
        el.classList.toggle('active');
      }
    });
  });
}
