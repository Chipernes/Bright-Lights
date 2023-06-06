/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 100 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 100) header.classList.add('header-scroll'); else header.classList.remove('header-scroll')
}
window.addEventListener('scroll', scrollHeader)

$(document).ready(function () {
 $('.nav__burger').click(function (event) {
    $('.nav__burger, .nav__menu').toggleClass('active');
    $('body').toggleClass('lock');
 });
});