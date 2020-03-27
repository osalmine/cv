var dataText = ["Student.", "Developer.", "Onni Salminen.", "PROJECTS"];
function typeWriter(text, i, tag, fnCallback) {
	if (i < (text.length)) {
		document.querySelector(tag).innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true" class="anim"></span>';

		setTimeout(function() {
			typeWriter(text, i + 1, tag, fnCallback)
		}, 120);
	}
	else if (typeof fnCallback == 'function') {
		setTimeout(fnCallback, 700);
	}
}
function StartTextAnimation(i, max, tag) {
	if (typeof dataText[i] == 'undefined' || i == max) {
		document.querySelector(tag).innerHTML = dataText[max - 1];
		return ;
	}
	if (i < dataText[i].length && i < max) {
		typeWriter(dataText[i], 0, tag, function() {
			StartTextAnimation(i + 1, max, tag);
		});
	}
}

document.addEventListener('DOMContentLoaded', function(event) {
	StartTextAnimation(0, 3, "#title-animate");
});

var isDone = 0;

$(document).on('scroll', function() {
    if($(this).scrollTop()>=$('#projects').position().top && isDone === 0) {
		StartTextAnimation(3, 4, '#prj');
		isDone++;
    }
});
