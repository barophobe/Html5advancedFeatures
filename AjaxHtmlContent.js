$('.ani a').on('click', function(e) {
	e.preventDefault();
	var url = this.href;

	$('.ani a.active').removeClass('active');
	$(this).addClass('active');

	$('#container').remove();
	$('#content').load(url + ' #content').hide().fadeIn('slow');
});