
$(document).ready(function(){

   
    
    
    $('.carousel').carousel({
        interval:4000
    });
    //show tool box
    $('.gear-ckeck').click(function(){
        $('.color-option').toggle();
    });
    //change theme color
    var colorLi=$('.color-option ul li');
    colorLi
       .eq(0).css("backgroundColor","#b45d22").end()
       .eq(1).css("backgroundColor","#0eafb7").end()
       .eq(2).css("backgroundColor","#e0342f").end()
       .eq(3).css("backgroundColor","#5cb85c").end()
       .eq(4).css("backgroundColor","#c70f6d");
       colorLi.click(function()
       {
         
        $("link[href*='theme']").attr("href",$(this).attr("data-value"));
       });

       var scrollButton=$('#scroll-top');
       $(window).scroll(function(){

            if($(this).scrollTop()>=500)
             {
                 scrollButton.show();
             }
             else 
                {
                scrollButton.hide();
                }
        

      
       });
       scrollButton.click(function()
       {
           $('html,body').animate({scrollTop:0} ,600);
        });
});

