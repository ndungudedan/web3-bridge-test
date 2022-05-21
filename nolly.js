document.addEventListener("DOMContentLoaded", function(){
    initNolly();
});

function initNolly() {
	const movieList = [
		{
			'title': 'The Redemption',
			'description': 'Checkout this redemption thriller by Ben Affleck',
			'likes': 0,
			'price': 500
		},
		{
			'title': 'Africas Tech Roots',
			'description': 'Find out the journey of Africas tech ecosystem',
			'likes': 0,
			'price': 500
		},
		{
			'title': 'The Invisible Man',
			'description': 'Now you see me. Now you cant',
			'likes': 0,
			'price': 500
		},
		{
			'title': 'The Complicated Project',
			'description': 'Complicated is their middle name',
			'likes': 0,
			'price': 500
		},
		{
			'title': 'Simply Javascript',
			'description': 'Simply Javascript has not slept for 3 days',
			'likes': 0,
			'price': 500
		},
		{
			'title': 'The New Web',
			'description': 'The web that does not belong to a spider',
			'likes': 0,
			'price': 500
		}
	];
	movieList.forEach(function (movie) {
		let ul = document.querySelector('ul');
		let li = document.createElement('li');
		li.innerHTML = `
		<span class="movie-item">${movie.title}</span>
		<span class="movie-item">KES ${movie.price}</span>
		<button name="likeButton"><i class="fa fa-thumbs-up"></i></button>`;
		li.classList.add('movie-list-item');
		ul.appendChild(li);
	});
}