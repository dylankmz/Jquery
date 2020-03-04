$(function() {
	// API-key: 195207
	// DOCUMENTATION: https://www.theaudiodb.com/api_guide.php

	// ajax example
	$.ajax({
		url: 'http://theaudiodb.com/api/v1/json/195207/search.php?s=abba',
		dataType: 'json',
		success: function(data) {


		}
	});

});
