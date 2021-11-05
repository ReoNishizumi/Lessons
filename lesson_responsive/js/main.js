$(function(){

    $('.js-btn').on('click', function(){
        
        $('.menu, .btn-line, .black-bg, .btn-under, .btn, .list-top')
            .toggleClass('open');
        
        $('body').toggleClass('fixed');
    });

});

$(function(){

    $('.page-top').click(function(){
        $('html,body').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});