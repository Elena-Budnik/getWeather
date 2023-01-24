
function getWeather() {
  let city = document.getElementById("city_name").value;
  let url = "https://api.openweathermap.org/data/2.5/weather?appid=5d066958a60d315387d9492393935c19&units=metric&q=" + city;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
        let name = data.name;
        var div = document.getElementById('city');
        div.innerHTML = 'Місто: ' + name;
        div.innerHTML += " Температура зараз: " + Math.round(data.main.temp) + " Відчувається як : " + Math.round(data.main.feels_like);
        div.innerHTML += " Швидкість вітру : " + data.wind.speed + "м/с ";
        let weather = document.querySelector(".weather");
        console.log(weather);

    });
}
