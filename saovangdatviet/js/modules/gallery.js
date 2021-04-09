export default function cosoGal() {
    let cosoGal = document.querySelector(".coso__gallery");
    if (cosoGal) {
        $(document).ready(function() {
            $('.coso__gallery').lightGallery({
                selector: '.coso__item',
            }); 
        });
    }
}