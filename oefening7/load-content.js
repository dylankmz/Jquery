$(function() {
	//The .get function makes an ajax call to retrieve the html

	let users = [
		{
			name: 'Akin',
			profession: 'Warrior',
			skill: 'Master'
		},
		{
			name: 'Duncan',
			profession: 'Smith',
			skill: 'Apprentice'
		}
	];

	$.get('html/card.html', function(data) {
			let templateCard = $.parseHTML(data);
	
	});
});
