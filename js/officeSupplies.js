$(document).ready(function(){


	$('[data-toggle="offcanvas"]').click(function () {
    	$('.row-offcanvas').toggleClass('active')
  	});

	// Image Slider
	jQuery('.thumbs a').click(function () {
	  thumbs.goToSlide($(this).data('slide'));
	  return false;
	});

});


/////////////////////////////////////////////////////////
////////////////// Image Slider /////////////////////////
/////////////////////////////////////////////////////////

var thumbs = jQuery('#thumbnails').slippry({
  // general elements & wrapper
  slippryWrapper: '<div class="slippry_box thumbnails" />',
  // options
  transition: 'horizontal',
  pager: false,
  auto: false,
  onSlideBefore: function (el, index_old, index_new) {
    jQuery('.thumbs a img').removeClass('active');
    jQuery('img', jQuery('.thumbs a')[index_new]).addClass('active');
  }
});



//////////////////////////////////////////////////////
////////////////// Read more /////////////////////////
//////////////////////////////////////////////////////

// Set read more/less for all long text that takes up more than 250 pixels.  
// Any text block with the class "more" will be evaluated.
$('.product-desc-text').each(function() {
    if($(this).innerHeight() > 250){
        $(this).readmore({
          moreLink: '<div class="btn-read"><button type="button" class="btn btn-default read-more-link">Read more</button></div>',
          lessLink: '<div class="btn-read"><button type="button" class="btn btn-default read-less-link">Read less</button></div>',
          collapsedHeight: 267,
          speed: 500,
          afterToggle: function(trigger, element, expanded) {
            if(! expanded) { // The "Close" link was clicked
              $('html, body').animate( { scrollTop: element.offset().top }, {duration: 500 } );
            }
          }
        });
    }
});



function addToBasket() {
	
	var price = Number(document.getElementById("price-new").innerHTML.replace(",",".")).toFixed(2);
	var totalPrice = Number(document.getElementById("price-total").innerHTML.replace(",",".")).toFixed(2);
	var resultPrice = parseFloat(totalPrice) + parseFloat(price);
	document.getElementById("price-total").innerHTML = resultPrice.toFixed(2).replace(".",",");

	var item = Number(document.getElementById("item-total").innerHTML);
	document.getElementById("item-total").innerHTML = item + 1;

	showItemTotal();
};

function showItemTotal() {

	var show = document.getElementById("item-total").innerHTML;
	
	jQuery("#item-total").css("display", "block");


}

