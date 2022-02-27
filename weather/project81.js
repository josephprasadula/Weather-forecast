let a=document.querySelector('.search-box');
let b;
document.querySelector('.search-box').addEventListener('keyup',function(evt){
    if (evt.keyCode == 13) {
        b=a.value;
        fetch(`https://goweather.herokuapp.com/weather/${b}`)
      .then(weather => {
        return weather.json();
      }).then(displayResults);
      function displayResults (weather) {
        let city = document.querySelector('.city');
        console.log(weather)
        city.innerText = `${b}`;
        document.querySelector('.weather').innerHTML=weather.description;
        document.querySelector('.temp').innerHTML=weather.temperature;
        document.querySelector('.yest-tod-tom').innerHTML=`yesterday:${weather.forecast[0].temperature},today:${weather.forecast[1].temperature},tommorow:${weather.forecast[2].temperature}`
        document.querySelector('.wind').innerHTML=`wind:${weather.wind}`
      }
    }
    
})


