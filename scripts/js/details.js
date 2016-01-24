$('.tile .body').click(function() {
	if ($( window ).width() > 600) {
		$(this).siblings('.lightbox').show();
	}
});

$('.lightbox').click(function() {
	$(this).hide();
})
