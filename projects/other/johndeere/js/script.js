$(document).ready(function() {
	$(document).keydown(function(key) {
		switch(parseInt(key.which,10)) {
			case 65:
				$('img, #JohnDeere').stop(true, true).animate({left: "-=10px"}, 'fast');
				break;
			case 83:
				$('img, #JohnDeere').stop(true, true).animate({top: "+=10px"}, 'fast');
				break;
			case 87:
				$('img, #JohnDeere').stop(true, true).animate({top: "-=10px"}, 'fast');
				break;
			case 68:
				$('img, #JohnDeere').stop(true, true).animate({left: "+=10px"}, 'fast');
				break;
			default:
				break;
			}
		});
	var Audio = document.getElementById("Audio");
	Audio.volume = 0.4;
});