export default function edit() {
  let edit = document.querySelectorAll('.infoJS');
  edit.forEach((el) => {
    let eInp = el.querySelector('.infoInp');
    let eBtn = el.querySelector('.infoBtn');
    let date = eInp.getAttribute('data-date');
    eBtn.addEventListener('click', () => {
      el.classList.add('active');
      eInp.removeAttribute('readonly');
      if (date) {
        eInp.setAttribute('type', 'date');
      }
    });
  });
}
