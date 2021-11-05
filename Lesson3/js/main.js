$(function() {

	let $catch = $('#catches').find('img'),
		catchcount = $catch.length,
		currentindex = 0,
		duration = 2000;

	$catch.eq(currentindex).fadeIn(duration);
	setInterval(showNext, duration);

	function showNext() {
		let nextindex = (currentindex + 1) % catchcount;

		$catch.eq(currentindex).fadeOut(duration, function() {
			$catch.eq(nextindex).fadeIn(duration);
			currentindex = nextindex;
		});

	};
});