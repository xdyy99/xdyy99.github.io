export default function gallery() {
  let Gal = document.querySelector('.galleryJS');
  if (Gal) {
    $(document).ready(function () {
      $('.galleryJS').lightGallery({
        selector: '.galImg',
      });
    });
  }
}
