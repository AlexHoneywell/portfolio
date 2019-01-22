//this file simply switches the video preview with the actual video

$(window).load(function() {
    
    $('#video_preview').click(function() {
        $('#project_video').show().html('<iframe src="https://player.vimeo.com/video/178104923?autoplay=1&title=0&byline=0&portrait=0" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');
        
        $(this).remove();
        
        $(document).ready(function(){
                $('#project_video').fitVids();
        });
        
        return false;

    })

});
