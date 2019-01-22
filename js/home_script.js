$(document).ready(function(){

    /*
    //SET IMG/LABEL ON PAGE LOAD
    var win = $(window); //this = window
    if (win.width() <= 479) {
        $(this).children('img').css('opacity', '.2');
        $(this).children('label').css('opacity', '1');
    }
    
    
    
    $(".project_thumb").each(function() {
        $(this).mouseenter(function(){
            $(this).children('img').css('opacity', '.1');
            $(this).children('label').css('opacity', '1'); 
        });
        $(this).mouseleave(function(){
            $(this).children('img').css('opacity', '1');
            $(this).children('label').css('opacity', '0');
        });
        
        
        
        
        
    });
    */
    
    
    
    //alert(portrait_pos);
    var scroll_pos = 0;
    $(document).scroll(function() {   
        var portrait_pos = $(".profile_image").offset().top;
        scroll_pos = $(this).scrollTop();
        if(scroll_pos > portrait_pos) {
            $("body").css('background-color', 'black');
        } else {
            $("body").css('background-color', 'white');
        }
    });
    
    $(window).on('resize', function(){
    //var win = $(this); //this = window
    //if (win.height() >= 820) { /* ... */ }
    //if (win.width() >= 1280) { /* ... */ }
    //if (win.width() <= 479) {}
     
        //UPDATE BACKGROUND DURING SCROLL
        var portrait_pos = $(".profile_image").offset().top;
        scroll_pos = $(document).scrollTop();
        if(scroll_pos > portrait_pos) {
            $("body").css('background-color', 'black');
        } else {
            $("body").css('background-color', 'white');
        }
        
            

    });
    
    
    
});


