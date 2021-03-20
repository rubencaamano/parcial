// Activador de jQuery - Función principal de jQuery
$(document).ready(function(){

    // Activación de transición del menú principal
    $('aside#menu-restaurante nav a, header article nav a').bind('click',function(event){
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1000,'easeOutExpo');
        event.preventDefault();
    });


    
    // Abrir y cerrar Menú Hamburguesa
    $('#abrir').click(function(){
        $('aside#menu-restaurante').animate({
            left: 0
        },300,'easeOutExpo');

        $('#abrir').hide();
        $('#cerrar').show();

        event.preventDefault();
    });

    $('#cerrar, aside#menu-restaurante nav a').click(function(){
        $('aside#menu-restaurante').animate({
            left: -290
        },300,'easeOutExpo');

        $('#abrir').show();
        $('#cerrar').hide();

        event.preventDefault();
    });
});