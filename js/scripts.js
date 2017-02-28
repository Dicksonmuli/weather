$(document).ready(function(){
  $('#submitWeather').click(function(){
    var city=$("#city").val();
    var resultElement=$('#result');

    if(city !=''){
      $.ajax({
        url:'https://samples.openweathermap.org/data/2.5/weather?q=' +city +'&units=metrics' +'&appid=b1b15e88fa797225412429c1c50c122a1',
        type: "GET",
        dataType: "jsonp",
        success: function(data){
          console.log(data);
        }
      })
    }else {
      $('.error').html('Field cannot be empty');
    }
  })
})
