export default function realPrl() {
  if (document.querySelector('.realPRL')) {
    VanillaTilt.init(document.querySelectorAll('.realPRL'), {
      max: 15,
      speed: 400,
    });
  }
  if (document.querySelector('.realPRLs')) {
    VanillaTilt.init(document.querySelectorAll('.realPRLs'), {
      max: 5,
      speed: 400,
    });
  }
  if (document.querySelector('.realPRLb')) {
    VanillaTilt.init(document.querySelectorAll('.realPRLb'), {
      max: 25,
      speed: 400,
    });
  }
}
