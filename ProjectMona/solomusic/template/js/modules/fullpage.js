export default function fpage() {
  let fPage = document.querySelector('.fullPage');
  if (fPage && window.innerWidth > 1200) {
    new fullpage(fPage, {
      //options here
      sectionSelector: '.fpSec',
      autoScrolling: true,
      scrollHorizontally: true,
      normalScrollElements: '.menu-ul ul',
      anchors: ['hfp1', 'hfp2', 'hfp3', 'hfp4', 'hfp5', 'hfp6', 'hfp7'],
    });
  }
}
