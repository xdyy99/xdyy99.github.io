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
}
