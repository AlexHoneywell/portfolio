

$(document).ready(function(){
    var y = $(window).scrollTop();  //your current y position on the page
    $(window).scrollTop(y+1);
    
    
    
    
    
    //change the background/icons of each project
    $(window).bind('scroll', function() {
        $('section').each(function() {
                        
            var section = $(this);
            
            var section_top = section.position().top; //top position of each section
            var section_height = section.height();
            var section_bottom = section_top + section_height;
            
            var scroll_top = $(window).scrollTop(); //position of window scrolled from the top
            
            var window_height = $(window).height();
            var scroll_bottom = window_height + scroll_top;
            
            
            
            var bgColor = section.data('background');
            /*
            if ((section_top <= scroll_top + section_height/2) && (section_bottom <= scroll_bottom + section_height/2)){
                $('body').css('background-color', bgColor);  
            }
            */
            
            if (section_top <= scroll_top + window_height/2){
                $('body').css('background-color', bgColor);      
            }
            
            
            
            
                  
            
            
            /*
            
            var position = section.position().top - $(window).scrollTop();
            var sectionPosition = section.position().top;
            var bgColor = section.data('background');
            var transition_height = $(window).height()/2; 
            var currentScroll = $(window).scrollTop();
            var sectionMarker = currentScroll + transition_height;
            
            var iconColor = section.data('icons');
            
            var pageWidth = $(window).width();
            
            
            
            if (position <= transition_height ) {
                $('body').css('background-color', bgColor); 
                $('.icon-logo').css('color', iconColor); 
                $('.icon-arrow').css('color', iconColor);
                

                $(this).find('.project_description').css('opacity', '1');  
                $(this).find('.project_description').css('visibility', 'visible');
                $(this).find('.project_image').css('opacity', '1');
            } else {

                $(this).find('.project_description').css('opacity', '0'); 
                $(this).find('.project_description').css('visibility', 'hidden'); 
                $(this).find('.project_image').css('opacity', '.2');
            } 
            
            //deal with project_description above scroll
            if (sectionPosition < currentScroll ){

                $(this).find('.project_description').css('opacity', '0'); 
                $(this).find('.project_description').css('visibility', 'hidden'); 
                $(this).find('.project_image').css('opacity', '.2');
            }
            */

            
        });        
    });
    
    
    
    
    $('.icon-arrow').on('click', function () {
        alert("hello");
        /*
        var ele = $(this).closest("section");
        // this will search within the section
        $("html, body").animate({
             scrollTop: $(ele).offset().top
        }, 100);
        return false;
        */
        
    });
    
    
    
    
    /*
    //change the size of icon based on place on page
    $(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
        // Do something
        
        if (scroll > 500){
            //
        }
        
    });
    */
    
    
    
    
    
});
    
    

    
    
/*
    $(document).scroll(function(){
    if($(this).scrollTop()>=$('#norcocitybikes').position().top){
        alert("you made it");
    }
 
})
*/    
    
/*    
$("nav").each(function() {
    $(this).css('background-color', 'blue');
    var currentColor = $(this).data('current-color');
    alert(currentColor);
});
*/   
    
    /*
    var scroll_pos = 0;
    $(document).scroll(function() { 
        scroll_pos = $(this).scrollTop();
        if(scroll_pos > 210) {
            $(".project_background").animate({
            backgroundColor: '#8AAAFC',}, 1000 );
        } else {
            $("project_background").css('background-color', 'blue');
        }
    });
    */
    
    
   
    

    
/*
    //scrolls to each section
    $(".jumper").on("click", function( e ) {
        var canOpenProject = false;

        
        e.preventDefault();
        
        //sets up values so we can focus on specific elements
        var currentJumper = this; 
        var currentProject = $(currentJumper).closest('.project');


 
        //toggle visibility of all other projects
        $('.project').not(currentProject).fadeToggle(1200);
        


        //check if click is even or odd
        var clicks = $(currentJumper).data('clicks');
        if (clicks) {
            // odd clicks
            canOpenProject = true;
        } else {
            // even clicks
            canOpenProject = false;
        }
        $(currentJumper).data("clicks", !clicks);
        
    
        
        //scroll to project  
        $('body').animate({ 
            scrollTop: $( $(currentJumper).attr('href') ).offset().top 
        }, 400, function( ){
       


        //choose to open or close the project (based on wasClickedTwice boolean)
        if (!canOpenProject) { 
            //first click:
            openProject(currentJumper, currentProject);
        } else {
            //second click:
            closeProject(currentJumper, currentProject);   
        }
        });
    });
    
    

    
    function openProject (currentJumper, currentProject){

        //animate project description left
        $(currentJumper).closest('.pj_desciption').animate({
            marginLeft: 100,
            
        }, 1300, 'easeInOutQuint', function(){
            
            //Get the link to the project so it can be loaded
            var str1 = $(currentJumper).attr('href').substr(1);
            var str2 = ".html"
            str1.substr(1);
            var linkToProject = str1.concat(str2);
            alert(linkToProject);
            //load in the html page     
            $('.project-bin').load(linkToProject); 
            
        });
        
        //animate project bar left
        $('.projectBar').animate({
            opacity: 0,
            marginLeft: 100,
            
        }, 1300, 'easeInOutQuint' );

        $('.project').animate({
            backgroundColor: '#8AAAFC',
        }, 1000  );






    }




    function closeProject (currentJumper, currentProject){

        //alert("close project");
        
        //animate project description left
        $(currentJumper).closest('.pj_desciption').animate({
            marginLeft: 400,
            
        }, 1300, 'easeInOutQuint');
        

        


        //var marginWidth = $('.projectBar').css("margin-left", )
        //alert("marginWidth");


        //css( "margin-left", 


        /*
        //animate project description left
        $(currentJumper).closest('.pj_desciption').animate({
            marginLeft: 100,
            
        }, 1300, 'easeInOutQuint', function(){
            
            //Get the link to the project so it can be loaded
            var str1 = $(currentJumper).attr('href').substr(1);
            var str2 = ".html"
            str1.substr(1);
            var linkToProject = str1.concat(str2);
            
            //load in the html page     
            $(".project-bin").load(linkToProject); 
            
        });
        
        //animate project bar left
        $('.projectBar').animate({
            opacity: 0,
            marginLeft: 100,
            
        }, 1300, 'easeInOutQuint' );

        $('.project').animate({
            //backgroundColor: '#E4D8B8',
        }, 1000, 'easeInOutQuint' );
*/

    







  

  


