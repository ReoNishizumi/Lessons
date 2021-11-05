$(function() {
	$(window).one('load', function() {
		$('#first').fadeIn(1500).animate({
			backgroundSize: '100%'
		}, 2000)
		$('.copy1').animate({
			opacity: '1'
		}, 2000)
		$('#first').fadeOut(1500, function() {
			$('#second').fadeIn(1500).animate({
				backgroundSize: '100%'
			}, 2000)
			$('.copy2').animate({
				opacity: '1'
			}, 2000)
			$('#second').fadeOut(1500, function() {
				$('#top_image').fadeIn(1500);
			})
		})
	})
});


$(function() {
    var $fixElement = $('#header'); // 追従する要素
    var fixClass = 'is-fixed'; // 追従時に付与するclass
 
    // 要素が追従する処理
    function fixFunction() {
        // スクロールが初期位置を通過しているとき
        if($(this).scrollTop() > 100) {
            $fixElement.addClass(fixClass);
        } else {
            $fixElement.removeClass(fixClass);
        }
    }
 
    $(window).on('load scroll', function() {
        fixFunction();
    });
});


$(function () {
  setTimeout('rect()');
});

function rect() {
  $('#pic1,#pic2,#pic3').animate({
    marginTop: '-=10px'
  }, 800).animate({
    marginTop: '+=10px'
  }, 800);
  setTimeout('rect()', 1600);
};


$(function() {
	setInterval('zoom()');
});

function zoom() {
	$('#work, #recruit').animate({
		backgroundSize: '120%'
	}, 5000);
	$('#work, #recruit').animate({
		backgroundSize: '130%'
	}, 5000);
	setInterval('zoom()', 3000)
};

