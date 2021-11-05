$(function(){

    let $recruit = $('.header-list-a');

    $recruit.on('click', function(){
        alert('現在、募集は行っておりません');
    });
});

$(function(){

    $('.target').each(function(){
      let $href = $(this).attr('href');

      if(location.href.match($href)) {
        $(this).parent().addClass('current').removeClass('hl-b');
      } else {
        $(this).parent().removeClass('current');
      }
    });
  });

  $(function(){
    $('.catch-more').click(function(){

      let  speed = 400;
      let  $target = $('.introduce');
      let  position = $target.offset().top;

          $("html,body").animate({scrollTop:position},speed);
    });
  });