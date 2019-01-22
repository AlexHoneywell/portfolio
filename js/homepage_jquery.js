$(document).ready(function(){
    
    var y = $(window).scrollTop();  //your current y position on the page
    $(window).scrollTop(y+1);
    
        
    $('section').each(function() {
        var section = $(this);
        var titleColor = section.data('title');
        $(this).find('h1').css('color', 'titleColor');
    });

    
    $("nav").mouseenter(function(){
        //$(this).css("background-color", "yellow");
        $(this).next('.nav_line').animate({width: "100%"}, 300);                           
    });
    
    $("nav").mouseleave(function(){
        //$(this).css("background-color", "yellow");
        $(this).next('.nav_line').animate({width: "50%"}, 300);                           
    });
    
    
    
    
    
   
    //change the background/icons of each project
    $(window).bind('scroll', function() {
        $('section').each(function() {
                        
            var section = $(this);
            
            var section_top = section.position().top; //top position of each section
            var section_height = section.height();
            var section_bottom = section_top + section_height;
            
            var scroll_top = $(window).scrollTop(); //position of window scrolled from the top
            var scroll_bottom = $(window).height() + scroll_top;
            
            var bgColor = section.data('backdrop');
            
            
            
            if (section_top - (section_height/2) <= scroll_top){
                $('body').css('background-color', bgColor);  
                   
                
            }

        });        
    });
    

});
    
    




  

  


