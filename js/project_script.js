//freeze page before all is loaded
$('html, body').css({'overflow': 'hidden','height': '100%'});

$(document).ready(function(){
    

    
    ///////////////////////////////////////////////////
    
});


$(window).load(function() {
    // executes when complete page is fully loaded, including all frames, objects and images

    //allow scroll once page is loaded
    $('html, body').css({'overflow': 'auto','height': 'auto'});
    $('.hero_area').addClass('hero_area_loaded');
    
    $('.hero_area').on('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',   
    function(e) {
        $(this).css('transition', 'none');
    });
    
    
    //puts play button at right height ////////////////
    
    var videoHeight = $(".video_preview").height();
    $(".play_button").css('margin-top',-videoHeight/2);
    
    //updates width of fullbleed_image ////////////////
    
    var width = $(window).width();
    $(".fullbleed_image").css('width', width);
    
    $(window).on('resize', function(){
        //rescale video preview image
        var width = $(window).width();
        $(".fullbleed_image").css('width', width);
        //reposition play icon
        var videoHeight = $(".video_preview").height();
        $(".play_button").css('margin-top',-videoHeight/2);
    });

 
});
