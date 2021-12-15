export default function trim() {
  $('.trimJS-1').trimLines({ maxLines: 1 });
  $('.trimJS-2').trimLines({ maxLines: 2 });
  $('.trimJS-3').trimLines({ maxLines: 3 });
  $('.trimJS-4').trimLines({ maxLines: 4 });
  $('.trimJS-5').trimLines({ maxLines: 5 });
  if (window.innerWidth > 550) {
    $('.trimJS-mb').trimLines({ maxLines: 2 });
  }
}
