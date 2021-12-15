export default function select2() {
  let select = document.querySelector('.select2-js');
  if (select) {
    $('.select2-js').select2({
      width: '100%',
    });
  }

  let select2 = document.querySelectorAll('.select-custom');
  select2.forEach((el) => {
    $(el)
      .find('.select2-js')
      .on('select2:open', function (e) {
        el.classList.add('active');
      });
    $(el)
      .find('.select2-js')
      .on('select2:close', function (e) {
        if (parseInt($(el).find('.select2-js').find(':selected').val()) < 1) {
          el.classList.remove('active');
        }
      });
    $(el)
      .find('.select2-js')
      .on('select2:select', function (e) {
        el.classList.add('active');
      });
  });
}
