export default function popup() {
  $(document).ready(function () {
    var popCheck = document.querySelectorAll('.popBtn');
    if (popCheck.length != 0) {
      $('.popBtn').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#username',
        modal: true,
        fixedContentPos: true,
        removalDelay: 300,
        mainClass: 'mfp-fade',
      });
      $(document).on('click', '.closeBtn', function (e) {
        e.preventDefault();
        $.magnificPopup.close();
      });
    }
    var vidCheck = document.querySelectorAll('.popYT');
    if (vidCheck.length != 0) {
      $('.popYT').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: true,
        removalDelay: 300,
        mainClass: 'mfp-fade',
      });
    }
    $(window).click(function (e) {
      if (
        $(e.target).closest('.popup__container').length === 0 &&
        $(e.target).closest('.popBtn').length === 0 &&
        $(e.target).closest('.popYT').length === 0
      ) {
        $.magnificPopup.close();
      }
    });
  });
}
