var preloader = function() {
	let images = document.images,
		imagesTotal = images.length,
		imagesLoaded = 0,
		preloader = document.querySelector('.preloader'),
		preloaderPercents = document.querySelector('.preloader__percents');
	const wrapper = document.querySelector('.wrapper');
	
	for (let i = 0; i < imagesTotal; i++) {
		var imageClone = new Image();
		imageClone.onload = imageLoaded();
		// image_clone.onerror = imageLoaded();
		imageClone.src = images[i].src
	}
	console.log(imagesTotal)
	console.log(imagesLoaded)

	function imageLoaded() {
		imagesLoaded++;
		preloaderPercents.innerHTML = (((100 / imagesTotal) * imagesLoaded) << 0) + '%';

		if (imagesLoaded >= imagesTotal ) {
			wrapper.style.overflow = 'hidden';
			setTimeout(function(){
				if(!preloader.classList.contains('done')){
					preloader.classList.add('done');
					wrapper.style.overflow = 'initial';	
				} 
			}, 2000);
		}
	}
}

preloader();

