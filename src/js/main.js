$(document).ready(function(){
   //scrollspy
   $("body").scrollspy({
       target: "#navbar-main",
       offset: 50
   });
   
   //scrollTo
   $('a[href^="#"]').click(function(e){
        e.preventDefault();
        // console.log(this.hash);
        $(window).stop(true).scrollTo(this.hash, {duration:550, interrupt:true, easing:'easeInBack'});
    });
    
    //MixItUp
    $(function(){
        $('#mix-container').mixItUp();
    });
    
    //Masonry
    $(".grid").masonry({
        itemSelector: '.grid-item',
        columnWidth: '.grid-sizer',
        percentPosition: true
    });
});