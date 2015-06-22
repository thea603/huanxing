
$(function() {

    $('.start').tap(function(){
 
    	var count = 0;
      var  min=0.1;
      var time=60000*min;

      var countdown = setInterval(CountDown, time*0.01 );
      $('.stop').show();
      $('.start').hide()


      $('.chaoshi span').html(min);
      function CountDown() {
            $(".mask").html('<div class="time">'+min+'</div>'+'<div>'+'分钟'+'</div>');
            count++;
            var num=count*3.6;

     function outtime(){
     		$('.mask').css('color','red');
            	  $('.chaoshi').html('你已经超时'+((count-100)/100*min).toFixed(2)+'分钟');
            	  $(".mask").html('<div class="time">'+(((count-100)/100*min+min).toFixed(2))+'</div>'+'<div>'+'分钟'+'</div>'+'<div>'+'已超时'+'</div>');

               }
                        
           if (num <= 180) {
       					 $('.circle').find('.right').css('-webkit-transform', "rotate(" + num + "deg)");
       					 } 
                
       			else  if(num<=360){
          					$('.circle').find('.right').css('-webkit-transform', "rotate(180deg)");
          					$('.circle').find('.left').css('-webkit-transform', "rotate(" + (num - 180) + "deg)");
                 }

            else if (num <= 540) {
                    $('.circle').find('.left').css('-webkit-transform', "rotate(0deg)");
                    $('.circle').find('.right').css('-webkit-transform', "rotate(" + (num - 360) + "deg)");
                     outtime();
                 } 
            else if (num <= 720){
                    $('.circle').find('.right').css('-webkit-transform', "rotate(540deg)");
                    $('.circle').find('.left').css('-webkit-transform', "rotate(" + (num - 540) + "deg)");
                       outtime();
                 }
            else(
                       outtime()
                   )
                
            if (count == 100) {
                    $(".circle").css("background","rgb(237, 120, 120)");
                 }
            if (count == 150) {
                    $(".circle").css("background","red");
                  }
            if (count == 280) {
                          // alert("严重超时3")
                            // clearInterval(countdown);
                 }
               stop();
                
                }
          function stop(){
          $('.stop').tap(function(){
          $('.stop').hide();
          $('.start').show();
          clearInterval(countdown);
        })
        }
                            })     
              });