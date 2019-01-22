//this file simply switches the video preview with the actual video

$(window).load(function() {
    
    $('#video_preview').click(function() {
        $('#project_video').show().html('<iframe src="https://player.vimeo.com/video/111805476?autoplay=1&color=000000&title=0&byline=0&portrait=0" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');
        
        $(this).remove();
        
        $(document).ready(function(){
                $('#project_video').fitVids();
        });
        
        return false;

    })

});
