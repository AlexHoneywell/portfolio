//this file simply switches the video preview with the actual video

$(window).load(function() {
    
    $('#video_preview').click(function() {
        $('#project_video').show().html('<iframe width="1280" height="720" src="https://www.youtube.com/embed/FRLDRQePY1o?rel=0&amp;autoplay=1" frameborder="0" allowfullscreen></iframe>');
        
        $(this).remove();
        
        $(document).ready(function(){
                $('#project_video').fitVids();
        });
        
        return false;

    })

});
