$(document).ready(() => {
    $('#mensaje').hide();

    $('#leerMas').click(function() {
        $('#intro').hide();
        $('#leerMas').hide();

        $('#mensaje').show('slow');
        $('button.oculto').show('slow');
    });

    $('button.oculto').click(function() {
        $('#intro').show();
        $('#mensaje').hide();
        $(this).hide();
        $('#leerMas').show();
    });
});