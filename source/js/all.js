//=require "masonry/dist/masonry.pkgd.js"
//=require "imagesloaded/imagesloaded.pkgd.js"


var elem = document.querySelector('.grid');

	
	
function runMasonry(){
	var msnry = new Masonry( elem, {
	  // options
	  itemSelector: '.grid-item',
      percentPosition: true,
      columnWidth: '.grid-sizer'
	});
}

imagesLoaded( elem, runMasonry);