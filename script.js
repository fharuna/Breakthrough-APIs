//Weather API

fetch("https://api.openweathermap.org/data/2.5/forecast?id=524901&appid=fee0f647577d0bbdd19bf3b2efcb8ace",)
 .then(function (response) {
     return response.json();
  } )
  .then(function (data) {
      console.log(data);
      })
      .catch(function(error) {
          console.log("there was a problem " , error);
      });
      
//Kanye quote API

fetch("https://api.kanye.rest",)
 .then(function (response) {
     return response.json();
  } )
  .then(function (data) {
      console.log(data);
      })
      .catch(function(error) {
          console.log("there was a problem " , error);
      });
      function randomQuote() {
        $.ajax({
            url: "https://api.kanye.rest",
            dataType: "jsonp",
            data: "method=getQuote&format=jsonp&lang=en&jsonp=?",
            success: function( response ) {
              $("#random_quote").html("<p id='random_quote' class='lead text-center'>" +
                response.quoteText + "<br/>&dash; " + response.quoteAuthor + " &dash;</p>");
            }
        });
      }
      
      $(function() {
        randomQuote();
      });
      
      $("button").click(function(){
        randomQuote();
      });
const toggle = document.getElementById('toggle')
const nav = document.getElementById('nav')
    