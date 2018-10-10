$(document).ready(function(){
    
    // Show more and Show less <button> functionality
    $('#toggleButton').click(function() {
        var button = this;
        $('.js--show-more').slideToggle('slow', function() {
            if($('.js--show-more').is(':visible')) {
                $('span', button).text('... Show less');
            }
            else {
                $('span', button).text('Show more ...');
            }
        });    
    });
    
    $('.owl-carousel').owlCarousel({
        items:4,
        lazyLoad:true,
        loop:true,
        margin:10
    });
});
