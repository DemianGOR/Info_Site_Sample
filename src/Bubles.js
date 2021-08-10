// eslint-disable-next-line no-undef
$("#login-button").click(function(event){
    event.preventDefault();

    // eslint-disable-next-line no-undef
    $('form').fadeOut(500);
    // eslint-disable-next-line no-undef
    $('.wrapper').addClass('form-success');
});