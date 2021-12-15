export default function gallery() {
  $('.gallery').each(function () {
    const $this = $(this);
    const $item = $this.find('.gItem');
    $(document).ready(function () {
      $this.lightGallery({
        selector: $item,
        thumbnail: true,
      });
    });
  });
}
