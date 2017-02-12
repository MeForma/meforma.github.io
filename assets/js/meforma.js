$(function() {
    $("a[href*='#']:not([href='#'])").click(function() {
        $('html,body').animate({
            scrollTop: $($(this).attr('href').replace('./', '')).offset().top - 50
        }, 1000);
        return false;
    });
});

$('section, footer, .menu a').on('click', function() {
    $('#menu-toggle').prop('checked', false);
})

$(document).ready(function() {
    $('#menu-toggle').prop('checked', false);
});
