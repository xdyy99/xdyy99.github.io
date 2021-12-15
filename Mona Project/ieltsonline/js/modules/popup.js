export default function pop() {
  $(document).ready(function () {
    var popCheck = document.querySelectorAll('.popupBtn');
    if (popCheck.length != 0) {
      $('.popupBtn').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#username',
        modal: true,
      });
      $(document).on('click', '.closeBtn', function (e) {
        e.preventDefault();
        $.magnificPopup.close();
      });
      $(window).click(function (e) {
        if ($(e.target).closest('.signup__popup').length === 0 && $(e.target).closest('.popupBtn').length === 0) {
          $.magnificPopup.close();
        }
      });
    }
  });
  $(document).ready(function () {
    $('.popYT').magnificPopup({
      disableOn: 700,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,

      fixedContentPos: false,
    });
  });
}
