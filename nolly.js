var movieList = [
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

document.addEventListener("DOMContentLoaded", function(){
    initNolly();
});
document.querySelector('ul').addEventListener('click', handleLike);

function initNolly() {
	
	movieList.forEach(function (movie) {
		let ul = document.querySelector('ul');
		let li = document.createElement('li');
		li.setAttribute("id", movieList.indexOf(movie));
		li.innerHTML = `
		<span class="movie-item">${movie.title}</span>
		<span class="movie-item">KES ${movie.price}</span>
		<span class="movie-item">${movie.likes}</span>
		<button name="likeButton"><i class="fa fa-thumbs-up"></i></button>`;
		li.classList.add('movie-list-item');
		ul.appendChild(li);
	});
}

function handleLike(e){
	e.preventDefault();
	if (e.target.name == 'likeButton') {
		let item = e.target.parentNode;
		const movieIndex=item.getAttribute('id');
		let movie=movieList[movieIndex];
		movieList[movieIndex].likes=movie.likes+1;
		document.querySelector('ul').innerHTML = '';
		updatePricing(movie,movieIndex);
		movieList.sort((a, b) => a.likes - b.likes);
		movieList.reverse();
		initNolly();
	}
}

function updatePricing(movie,movieIndex){
	if(movie.likes<=1){
		movieList[movieIndex].price=movie.price+100;
	}else if(movie.likes<=5){
		movieList[movieIndex].price=movie.price+200;
	}else if(movie.likes<=10){
		movieList[movieIndex].price=movie.price+300;
	}else{
		movieList[movieIndex].price=movie.price+400;
	}
}