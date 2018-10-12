$(document).ready(function(){
    
    // Show more and Show less <button> functionality
    $('#toggleButton').click(function() {
        var button = this;
        $('.js--show-more').slideToggle('slow', function() {
            if($('.js--show-more').is(':visible')) {
                $('span', button).text('... Show less');
                $('.section-album-info').css('margin-bottom', '4rem');
            }
            else {
                $('span', button).text('Show more ...');
            }
        });    
    });
    
    // Owl-Carousel 
    $('.owl-carousel').owlCarousel({
        items: 1,
        lazyLoad: true,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 2700,
        autoplayHoverPause: true
    });
});
