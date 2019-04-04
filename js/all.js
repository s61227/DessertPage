$(document).ready(function(){
    
    // ====== 手機版 menu ======
    $('.MenuBar').click(function(){
        $('.topMenu nav').toggleClass('menu-show');
    });

    // ====== Tab切換 ======
    $('.tab-content[id!="E-invoice"]').hide();
    $('.tab a').on('click', function(e){
        e.preventDefault();
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
        target = $(this).attr('href');
        $('.tab-content[id!="target"]').hide();
        $(target).fadeIn(600);
    });

});