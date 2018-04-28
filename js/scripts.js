$(document).ready(function(){
  var count = 10;
  var breakTime = 10;


  $('#reset').hide();
  $('#start').click(function(){

  var counter = setInterval(timer, 1000);

  function timer() {
    $('#start, #minus5Clock, #add5Clock, #minus5Break, #add5Break').hide();
        count -= 1;
        if (count === 0) {
          clearInterval(counter);
          var breakTime = setInterval(breakTimer, 1000);

      }
         $('#num').html(count);
         function breakTimer(){
         breakTime -= 1;
         if(breakTime === 0) {
         clearInterval(breakTime);
         $('#reset').show();
       }
       $('#breakNum').html(breakTime);

     }
   }

  });

      $('#reset').click(function(){
        count = 25;
        breakTime = 25;
        $('#num').html(count);
        $('#breakNum').html(breakTime);
      });

      $('#minus5Clock').click(function(){
       if(count > 5){
       count -= 1;
       $('#num').html(count);
     }
      });
     $('#add5Clock').click(function(){
       count += 1;
       $('#num').html(count);
     });

     $('#minus5Break').click(function(){
          if(breakTime > 5){
          breakTime -= 1;
         $('#breakNum').html(breakTime);
        }
        });
      $('#add5Break').click(function(){
          breakTime += 1;
          $('#breakNum').html(breakTime);
        });

});
