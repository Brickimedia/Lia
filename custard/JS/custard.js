/**************************************\
|---Custard Skin  JavaScript Scripts---|
|--Written for use on Brickimedia.org--|
\**************************************/
$(document).ready(function () {

    $('#taskbar .toggle').funcToggle('click', function () {
        $('#taskbar').animate({marginBottom: -( $('#taskbar').height() + 30 )}, 'slow');
        /*$('#taskbar .notice').each(function () {
            if ($(this).text().length > 0) {
                $(this).slideDown(250, 'linear');
            }
        });*/
    }, function () {
        /*$('#taskbar .notice').each(function () {
            if ($(this).text().length > 0) {
                $(this).slideUp(250, 'linear');
            }
        });*/
        $('#taskbar').animate({marginBottom: -30)}, 'slow');
    });

    $(window).on('load', function () {
        console.log('done');
        $('#temp .loader').fadeOut(500, 'linear');
    });

    $('#temp .tag').funcToggle('click', function () {
        $('#temp .info').slideToggle(500, 'linear');
    });

});
