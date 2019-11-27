document.addEventListener('mouseout', function (event) {

	if(event.target.matches('.container__sub') || event.target.matches('.container__sub__link'))
		event.target.classList.toggle('hovered');
	if(event.target.matches('.container__sub') && event.target.classList.contains('active'))
		event.target.classList.toggle('selecthovered')
	if(event.target.classList.contains('disabled'))
		event.target.classList.remove('hovered','selecthovered')
	else return;

}, false);

document.addEventListener('click', function(event){
	if(event.target.matches('.container__sub') && !event.target.classList.contains('active'))
		event.target.classList.add('active');
	else if(event.target.matches('.container__sub') && !event.target.classList.contains('disabled'))
		event.target.classList.add('disabled');
	else
		event.target.classList.remove('active','disabled','selecthovered');

}, false);