export default function voucher() {
  let cp = document.querySelectorAll('.vouCP');
  cp.forEach((el) => {
    el.addEventListener('click', () => {
      var inp = document.createElement('input'),
        url = el.getAttribute('data-voucher');
      document.body.appendChild(inp);
      inp.value = url;
      inp.select();
      document.execCommand('copy');
      document.body.removeChild(inp);
    });
  });
}
