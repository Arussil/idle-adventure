$(document).ready(function() {
	var rat_killed = 0;

	window.setInterval(function() {
	});

	$('#kill-rat').on('click', function() {
		if (rat_killed === 0) {
			$('#killcount-rat').removeClass('hidden');
		} else if(rat_killed === 20) {
			$('#inventory').removeClass('hidden');
		}
		rat_killed++;
		$('#killcount-rat > span').html(rat_killed);
	})
});
