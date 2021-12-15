export default function zoom() {
  $('.zoomWrap')
    // tile mouse actions
    .on('mouseover', function () {
      // $(this).children('.zoomImg').css({ width: '95%' });
      $(this)
        .children('.zoomImg')
        .css({ transform: 'scale(' + $(this).attr('data-scale') + ')' });
      $(this)
        .children('.zoomImg')
        .css({ padding: ($(this).height() * 3) / 100 + 'px 3%' });
    })
    .on('mouseout', function () {
      $(this).children('.zoomImg').css({ transform: 'scale(1)' });
      $(this).children('.zoomImg').css({ padding: '0' });
    })
    .on('mousemove', function (e) {
      $(this)
        .children('.zoomImg')
        .css({
          'transform-origin':
            ((e.pageX - $(this).offset().left) / $(this).width()) * 100 + '% ' + ((e.pageY - $(this).offset().top) / $(this).height()) * 100 + '%',
        });
    });
}
