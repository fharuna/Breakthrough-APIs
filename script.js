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
const toggle = document.getElementById('toggle')
const nav = document.getElementById('nav')
    