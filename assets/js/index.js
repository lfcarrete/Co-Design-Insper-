document.addEventListener('DOMContentLoaded', function() {
	let db = coDesConnect('https://portifolio-g4.firebaseio.com/')

	db.download('/', function(data) {
		context = data
		coDesReplace('.categoria', context)
	})
   	setTimeout(function(){ 
   		let loading = document.querySelector(".preloader");
   		let corpo = document.querySelector(".body");
   		let head = document.querySelector(".header")
   		loading.style.display = "none";
   		corpo.style.display = "flex";
   		head.style.display = "flex";
   		
   	}, 3000);
})



